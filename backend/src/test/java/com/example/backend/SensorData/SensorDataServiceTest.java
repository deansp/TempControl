package com.example.backend.SensorData;

import com.example.backend.model.SensorData;
import com.example.backend.repository.SensorDataRepository;
import com.example.backend.service.SensorDataService;
import org.junit.jupiter.api.Test;

import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class SensorDataServiceTest {

    SensorDataRepository mockrepo = mock(SensorDataRepository.class);
    SensorDataService sensorDataService = new SensorDataService(mockrepo);
    @Test
    void getAllSensorData_shouldReturn_ListWithElementTemp_whenCalled(){
        //GIVEN
        SensorData newSensorData = new SensorData("1","Bob","20","60","xx","xx");
        List<SensorData> expected = List.of(newSensorData);
        when(mockrepo.findAll()).thenReturn(expected);
        //WHEN
        List<SensorData> actual = sensorDataService.getAllSensorData();
        //THEN
        assertEquals(actual, expected);
    }

    @Test
    void addNewSensorData(){
        //GIVEN
        SensorData newSensorData = new SensorData("1","Bob","20","60","xx","xx");
        when(mockrepo.save(newSensorData)).thenReturn(newSensorData);
        //WHEN
        SensorData actual = sensorDataService.addSensorData(newSensorData);
        //THEN
        assertEquals(actual, newSensorData);

    }
}
