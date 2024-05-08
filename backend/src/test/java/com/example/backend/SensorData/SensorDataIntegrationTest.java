package com.example.backend.SensorData;

import com.example.backend.model.SensorData;
import com.example.backend.repository.SensorDataRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class SensorDataIntegrationTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private SensorDataRepository repository;

    @DirtiesContext
    @Test
    void expectListOfSensorData_whenCallingHttpGet() throws Exception{

        repository.save(new SensorData("1","60","30"));

        mvc.perform((MockMvcRequestBuilders.get("/api/sensordata")))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                        [
                            {
                            "id": "1",
                            "temp": "60",
                            "humidity": "30"
                            }
                        ]

                        """
                ));
    }


}
