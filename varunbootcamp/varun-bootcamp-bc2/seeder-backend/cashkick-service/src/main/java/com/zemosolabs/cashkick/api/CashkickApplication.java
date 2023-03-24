package com.zemosolabs.cashkick.api;

import okhttp3.OkHttpClient;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableWebMvc
public class CashkickApplication implements WebMvcConfigurer {

    @Bean
    public OkHttpClient configureOkHttpClient() {
        return new OkHttpClient();
    }

    @Bean
    public ModelMapper getModelMapper() {
        return new ModelMapper();
    }

    @Bean
    public RestTemplate restTemplate() { return new RestTemplate(); }

    public static void main(String[] args) {
        SpringApplication.run(CashkickApplication.class, args);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://3.135.233.218:3042/"); // Compliant
    }

}
