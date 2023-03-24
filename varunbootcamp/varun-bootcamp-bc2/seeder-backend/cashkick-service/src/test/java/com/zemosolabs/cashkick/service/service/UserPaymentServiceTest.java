//package com.zemosolabs.cashkick.service.service;
//
//import com.zemosolabs.cashkick.api.service.UserPaymentService;
//import com.zemosolabs.cashkick.api.model.UserPayment;
//import com.zemosolabs.cashkick.api.repository.UserPaymentRepository;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.when;
//
//@SpringBootTest
//public class UserPaymentServiceTest {
//
//    @Autowired
//    private UserPaymentService userPaymentService;
//
//    @MockBean
//    private UserPaymentRepository userPaymentRepository;
//
//    @Test
//    void getUserPayments() {
//        List<UserPayment> userPayments = new ArrayList<>();
//
//        UserPayment userPayment = new UserPayment();
//
//        userPayments.add(userPayment);
//
//        when(userPaymentRepository.findAll()).thenReturn(userPayments);
//
//        assertEquals(1, userPaymentRepository.findAll().size());
//    }
//}
