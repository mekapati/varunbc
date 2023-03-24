package com.zemosolabs.notification.service.service;

import com.zemosolabs.notification.service.dto.NotificationDTO;

public interface NotificationService {

    void sendEmailNotification(NotificationDTO details);
}
