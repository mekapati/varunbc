//package com.zemosolabs.cashkick.service.controller;
//
//import com.zemosolabs.cashkick.api.controller.UserPaymentController;
//import com.zemosolabs.cashkick.api.service.UserPaymentService;
//import com.zemosolabs.cashkick.api.dto.UserPaymentDTO;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.UUID;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.when;
//
//@SpringBootTest
//public class UserPaymentControllerTest {
//
//    @Autowired
//    private UserPaymentController userPaymentController;
//
//    @MockBean
//    private UserPaymentService userPaymentService;
//
//    @Test
//    void getUserPayments() {
//        List<UserPaymentDTO> userPaymentDTOList = new ArrayList<>();
//        UserPaymentDTO userPaymentDTO = new UserPaymentDTO();
//
//        userPaymentDTOList.add(userPaymentDTO);
//
//        when(userPaymentService.getUserPayments(UUID.fromString("09060b7f-7cdf-456e-85f0-4561477f341a "))).thenReturn(userPaymentDTOList);
//
//        assertEquals(1, userPaymentController.getUserPayments(UUID.fromString("09060b7f-7cdf-456e-85f0-4561477f341a ")).size());
//    }
//}
