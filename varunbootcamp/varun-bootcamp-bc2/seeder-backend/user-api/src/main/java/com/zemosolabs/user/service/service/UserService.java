package com.zemosolabs.user.service.service;

import com.zemosolabs.user.service.dto.UserDTO;

public interface UserService {
    public UserDTO findById(String userId);

    public UserDTO save(UserDTO dtoUser);

    public UserDTO findByEmail(String email);
}
