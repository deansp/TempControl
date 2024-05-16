package com.example.backend.service;

import com.example.backend.model.SensorData;
import com.example.backend.repository.SensorDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SensorDataService {

    @Value("${RASPI_API}")
    private String baseUrl="http://192.168.2.100:8080/api/send_data";

    private final RestClient restClient = RestClient.builder()
            .baseUrl(baseUrl)
            .build();

    private final SensorDataRepository repo;
    public List<SensorData> getAllSensorData() {return repo.findAll();}

    public SensorData addSensorData(SensorData newSensorData) {
        SensorData sensorData = new SensorData(
                newSensorData.getId(),
                newSensorData.getName(),
                newSensorData.getTemp(),
                newSensorData.getHumidity(),
                newSensorData.getTime(),
                newSensorData.getComment()
            );
    repo.save(sensorData);
    return sensorData;
    }

    public SensorData getRaspiValue() {
        return restClient.get()
                .retrieve()
                .body(SensorData.class);
    }
}
