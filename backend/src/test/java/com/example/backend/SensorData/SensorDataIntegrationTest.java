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
        mvc.perform(MockMvcRequestBuilders.post("/api/sensordata")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                                    {
                                        "id": "1",
                                        "temp": "60",
                                        "humidity": "30"
                                    }
                                """)
        );
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

    @DirtiesContext
    @Test
    void postTodo_shouldReturnNewTodoWithId_WhenCalledWithDto() throws Exception {
        //GIVEN

        //WHEN
        mvc.perform(MockMvcRequestBuilders.post("/api/sensordata")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                            {
                                "id": "1",
                                "temp": "60",
                                "humidity": "30"
                            }
                        """)
        )
        //THEN
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.content().json("""
                    {
                        "id": "1",
                        "temp": "60",
                        "humidity": "30"
                    }
                """))
        .andExpect(MockMvcResultMatchers.jsonPath("$.id").isNotEmpty());
    }



}
