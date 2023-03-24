package com.zemosolabs.user.service.controller;

import com.zemosolabs.user.service.dto.UserDTO;
import com.zemosolabs.user.service.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping("/{userId}")
    public UserDTO getUser(@PathVariable String userId) {
        return userService.findById(userId);
    }

    @GetMapping("/email/{email}")
    public UserDTO getUserByEmail(@PathVariable String email) {
        return userService.findByEmail(email);
    }

    @PostMapping
    public UserDTO save(@RequestBody UserDTO user) {
        return userService.save(user);
    }

}