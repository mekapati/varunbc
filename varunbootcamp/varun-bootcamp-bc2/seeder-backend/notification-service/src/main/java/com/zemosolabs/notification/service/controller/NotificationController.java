package com.zemosolabs.notification.service.controller;

import com.zemosolabs.notification.service.dto.NotificationDTO;
import com.zemosolabs.notification.service.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/notification")
public class NotificationController {

    private final NotificationService notificationService;

    @PostMapping("/sendEmail")
    public void sendNotification(@RequestBody NotificationDTO details) {
        notificationService.sendEmailNotification(details);
    }
}
