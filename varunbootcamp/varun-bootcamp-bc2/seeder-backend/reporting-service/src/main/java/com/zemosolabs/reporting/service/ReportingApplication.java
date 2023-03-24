package com.zemosolabs.reporting.service;

import okhttp3.OkHttpClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
public class ReportingApplication {

    @Bean
    public OkHttpClient configureOkHttpClient() {
        return new OkHttpClient();
    }

    public static void main(String[] args) {
        SpringApplication.run(ReportingApplication.class, args);
    }

}
