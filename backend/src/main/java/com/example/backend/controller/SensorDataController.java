package com.example.backend.controller;

import com.example.backend.model.SensorData;
import com.example.backend.service.SensorDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sensordata")
@RequiredArgsConstructor
public class SensorDataController {

    private final SensorDataService service;

    @GetMapping
    public List<SensorData> getSensorData() {
        return service.getAllSensorData();
    }

    @PostMapping
    public SensorData addSensorData(@RequestBody SensorData newSensorData) {
        return service.addSensorData(newSensorData);
    }

}
