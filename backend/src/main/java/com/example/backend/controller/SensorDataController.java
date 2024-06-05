package com.example.backend.controller;

import com.example.backend.model.SensorData;
import com.example.backend.service.SensorDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plant")
@RequiredArgsConstructor
public class SensorDataController {

    private final SensorDataService service;

    @GetMapping()
    public List<SensorData> getSensorData() {
        return service.getAllSensorData();
    }

    @GetMapping("/detail/{id}")
    public SensorData getSensorDataById(@PathVariable String id) {
        return service.getSensorDataById(id);
    }

    @PostMapping
    public SensorData addSensorData(@RequestBody SensorData newSensorData) {
        return service.addSensorData(newSensorData);
    }

}
