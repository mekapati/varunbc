package com.zemosolabs.user.service.controller;

import com.zemosolabs.user.service.dto.UserDTO;
import com.zemosolabs.user.service.model.Role;
import com.zemosolabs.user.service.model.User;
import com.zemosolabs.user.service.model.UserSettings;
import com.zemosolabs.user.service.service.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.math.BigDecimal;
import java.util.Date;
import java.util.UUID;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Mock
    UserServiceImpl userService;

    @InjectMocks
    UserController userController;
    @Autowired
    private ModelMapper modelMapper;

    @BeforeEach
    public void setUp() {
        mockMvc= MockMvcBuilders.standaloneSetup(userController).build();
    }

    private User getUser(){
        BigDecimal bigDecimal = new BigDecimal(120000);
        Role role = new Role("USR", "user");
        UserSettings settings = new UserSettings(UUID.fromString("b15e92ce-5d1a-4060-9ae7-aac4956be63a"), 12, "USD", bigDecimal,12);
        User user = new User(UUID.fromString("38ee5895-039b-49ac-958f-8ce12d1f75ea"), "test@gmail.com","0123456789",true, false, new Date(), role,settings );

        return user;
    }
    @Test
     void getSettings() throws Exception{

        User user= getUser();
        when(userService.findById("38ee5895-039b-49ac-958f-8ce12d1f75ea")).thenReturn(modelMapper.map(user, UserDTO.class));
        this.mockMvc.perform(get("/api/v1/user/38ee5895-039b-49ac-958f-8ce12d1f75ea"))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("test@gmail.com"));
    }
}