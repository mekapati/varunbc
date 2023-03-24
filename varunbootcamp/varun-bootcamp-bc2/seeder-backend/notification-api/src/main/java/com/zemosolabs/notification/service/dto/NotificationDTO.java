package com.zemosolabs.notification.service.dto;

import lombok.Data;

@Data
public class NotificationDTO {

    private String recipient;

    private String msgBody;

    private String subject;

}