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
                newSensorData.getTemp(),
                newSensorData.getHumidity()
            );
    repo.save(sensorData);
    return sensorData;
    }
}
