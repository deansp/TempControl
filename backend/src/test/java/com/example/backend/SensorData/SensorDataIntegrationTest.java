package com.example.backend.SensorData;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class SensorDataIntegrationTest {

    @Autowired
    private MockMvc mvc;

    @DirtiesContext
    @Test
    void expectListOfSensorData_whenCallingHttpGet() throws Exception{
        //GIVEN
        mvc.perform(MockMvcRequestBuilders.post("/api/plant")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                                    {
                                      "id": "1",
                                      "name": "Bob",
                                      "species": "Canabio Chillo",
                                      "status": "sehr gut",
                                      "temp": "22.0",
                                      "humidity": "37.0",
                                      "airQuali": "7000",
                                      "url": "",
                                      "comment": "Einmal die Woche, benötige ich Wasser.",
                                      "tempIntervall": [
                                        "20",
                                        "21",
                                        "23",
                                        "20",
                                        "22",
                                        "23",
                                        "22"
                                      ],
                                      "humidityIntervall": [
                                        "63",
                                        "60",
                                        "63",
                                        "67",
                                        "67",
                                        "68",
                                        "60"
                                      ],
                                      "airQualiIntervall": [
                                        "7000",
                                        "8000",
                                        "8000",
                                        "9000",
                                        "6000",
                                        "6500",
                                        "6600"
                                      ]
                                    }
                                """)
        );
        mvc.perform((MockMvcRequestBuilders.get("/api/plant")))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                        [
                            {
                                      "id": "1",
                                      "name": "Bob",
                                      "species": "Canabio Chillo",
                                      "status": "sehr gut",
                                      "temp": "22.0",
                                      "humidity": "37.0",
                                      "airQuali": "7000",
                                      "url": "",
                                      "comment": "Einmal die Woche, benötige ich Wasser.",
                                      "tempIntervall": [
                                        "20",
                                        "21",
                                        "23",
                                        "20",
                                        "22",
                                        "23",
                                        "22"
                                      ],
                                      "humidityIntervall": [
                                        "63",
                                        "60",
                                        "63",
                                        "67",
                                        "67",
                                        "68",
                                        "60"
                                      ],
                                      "airQualiIntervall": [
                                        "7000",
                                        "8000",
                                        "8000",
                                        "9000",
                                        "6000",
                                        "6500",
                                        "6600"
                                      ]
                                    }
                        ]
                        """
                ));
    }

    @DirtiesContext
    @Test
    void postTodo_shouldReturnNewTodoWithId_WhenCalledWithDto() throws Exception {
        //GIVEN

        //WHEN
        mvc.perform(MockMvcRequestBuilders.post("/api/plant")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                            {
                                      "id": "1",
                                      "name": "Bob",
                                      "species": "Canabio Chillo",
                                      "status": "sehr gut",
                                      "temp": "22.0",
                                      "humidity": "37.0",
                                      "airQuali": "7000",
                                      "url": "",
                                      "comment": "Einmal die Woche, benötige ich Wasser.",
                                      "tempIntervall": [
                                        "20",
                                        "21",
                                        "23",
                                        "20",
                                        "22",
                                        "23",
                                        "22"
                                      ],
                                      "humidityIntervall": [
                                        "63",
                                        "60",
                                        "63",
                                        "67",
                                        "67",
                                        "68",
                                        "60"
                                      ],
                                      "airQualiIntervall": [
                                        "7000",
                                        "8000",
                                        "8000",
                                        "9000",
                                        "6000",
                                        "6500",
                                        "6600"
                                      ]
                                    }
                        """)
        )
        //THEN
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.content().json("""
                    
                    {
                                      "id": "1",
                                      "name": "Bob",
                                      "species": "Canabio Chillo",
                                      "status": "sehr gut",
                                      "temp": "22.0",
                                      "humidity": "37.0",
                                      "airQuali": "7000",
                                      "url": "",
                                      "comment": "Einmal die Woche, benötige ich Wasser.",
                                      "tempIntervall": [
                                        "20",
                                        "21",
                                        "23",
                                        "20",
                                        "22",
                                        "23",
                                        "22"
                                      ],
                                      "humidityIntervall": [
                                        "63",
                                        "60",
                                        "63",
                                        "67",
                                        "67",
                                        "68",
                                        "60"
                                      ],
                                      "airQualiIntervall": [
                                        "7000",
                                        "8000",
                                        "8000",
                                        "9000",
                                        "6000",
                                        "6500",
                                        "6600"
                                      ]
                                    }‚
                """))
        .andExpect(MockMvcResultMatchers.jsonPath("$.id").isNotEmpty());
    }
}
