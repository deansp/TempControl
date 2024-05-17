package com.example.backend.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class SensorData {
    private final String id;
    private final String name;
    private final String species;
    private final String status;
    private final String temp;
    private final String humidity;
    private final String url;
    private final String comment;
    private final String[] tempIntervall;
    private final String[] humidityIntervall;
}
