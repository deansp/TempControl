package com.example.backend.service;

import com.example.backend.model.SensorData;
import com.example.backend.repository.SensorDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SensorDataService {

    private final SensorDataRepository repo;
    public List<SensorData> getAllSensorData() {return repo.findAll();}

    public SensorData addSensorData(SensorData newSensorData) {
        SensorData sensorData = new SensorData(
                newSensorData.getId(),
                newSensorData.getName(),
                newSensorData.getSpecies(),
                newSensorData.getStatus(),
                newSensorData.getTemp(),
                newSensorData.getHumidity(),
                newSensorData.getUrl(),
                newSensorData.getComment(),
                newSensorData.getTempIntervall(),
                newSensorData.getHumidityIntervall()
            );
    repo.save(sensorData);
    return sensorData;
    }
}
