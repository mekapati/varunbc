package com.zemosolabs.cashkick.api.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.zemosolabs.cashkick.api.controller.CashkickController;
import com.zemosolabs.cashkick.api.dto.CashkickDTO;
import com.zemosolabs.cashkick.api.dto.ContractDTO;
import com.zemosolabs.cashkick.api.model.CashkickStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.runner.RunWith;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class CashkickTest {

    private MockMvc mockMvc;

    ObjectMapper objectMapper = new ObjectMapper();
    ObjectWriter objectWriter = objectMapper.writer();

    @Mock
    private CashkickService cashkickService;

    @InjectMocks
    private CashkickController cashkickController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(cashkickController).build();
    }

    List<ContractDTO> contracts = new ArrayList<>();

    @Test
    void saveCashkickTest() throws Exception {

        CashkickDTO myCashkick = new CashkickDTO(
                UUID.randomUUID(),
                "my test cashkick",
                UUID.randomUUID(),
                CashkickStatus.Status.APPROVED.valueOf(),
                12.00,
                12,
                new Date(),
                null,
                0,
                null,
                0,
                contracts
        );

        String content = objectWriter.writeValueAsString(myCashkick);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/api/v1/cashkick")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(content);

        mockMvc.perform(mockRequest).andExpect(status().isOk());

    }

}