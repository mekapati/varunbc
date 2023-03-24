package com.zemosolabs.cashkick.api;

import com.github.javafaker.Faker;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class CashkickServiceTest {

  private static Faker fFaker = new Faker();

}