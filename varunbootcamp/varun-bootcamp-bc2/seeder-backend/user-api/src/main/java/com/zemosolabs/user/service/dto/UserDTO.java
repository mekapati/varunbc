package com.zemosolabs.user.service.dto;

import com.zemosolabs.user.service.model.UserSettings;
import lombok.*;

@Data
public class UserDTO {

    private String id;

    private String email;

    private String phone;

    private boolean active;

    private UserSettings settings;

}
