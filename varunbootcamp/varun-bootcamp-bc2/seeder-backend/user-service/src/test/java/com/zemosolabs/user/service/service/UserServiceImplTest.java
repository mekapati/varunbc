package com.zemosolabs.user.service.service;

import com.zemosolabs.user.service.dto.UserDTO;
import com.zemosolabs.user.service.model.Role;
import com.zemosolabs.user.service.model.UserSettings;
import com.zemosolabs.user.service.model.User;

import com.zemosolabs.user.service.repository.UserRepository;
import org.junit.jupiter.api.Test;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.modelmapper.ModelMapper;

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest

@AutoConfigureMockMvc
class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService;

    @Spy
     ModelMapper modelMapper = new ModelMapper();

    @Test
    void getById(){
        User user = getUser();
        Optional<User> optional = Optional.ofNullable(user);
        when(userRepository.findById(UUID.fromString("38ee5895-039b-49ac-958f-8ce12d1f75ea"))).thenReturn(optional);
        UserDTO expected = modelMapper.map(user, UserDTO.class);
        UserDTO actual = userService.findById("38ee5895-039b-49ac-958f-8ce12d1f75ea");

        assertEquals(expected.getEmail(),actual.getEmail());
    }

    private User getUser(){
        BigDecimal credit = new BigDecimal(120000);
        Role role = new Role("USR", "user");
        UserSettings settings = new UserSettings(UUID.fromString("b15e92ce-5d1a-4060-9ae7-aac4956be63a"), 12, "USD", credit,12);
        User user = new User(UUID.fromString("38ee5895-039b-49ac-958f-8ce12d1f75ea"), "test@gmail.com","0123456789",true, false, new Date(), role,settings);

        return user;
    }

}