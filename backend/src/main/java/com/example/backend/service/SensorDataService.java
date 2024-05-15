package com.example.backend.service;

import com.example.backend.model.SensorData;
import com.example.backend.repository.SensorDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SensorDataService {

    private RestClient restClient = RestClient.builder()
            .baseUrl("http://192.168.2.100:8080/api/send_data")
            .build();

    private final SensorDataRepository repo;
    public List<SensorData> getAllSensorData() {return repo.findAll();}

    public SensorData addSensorData(SensorData newSensorData) {
        SensorData sensorData = new SensorData(
                newSensorData.getId(),
                newSensorData.getTemp(),
                newSensorData.getHumidity()
            );
    repo.save(sensorData);
    return sensorData;
    }

    public String getRaspiValue() {
        String body = restClient.get()
                .retrieve()
                .body(String.class);
        return body;
    }
}
