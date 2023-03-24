package com.zemosolabs.user.service.service;

import com.zemosolabs.user.service.dto.UserDTO;
import com.zemosolabs.user.service.model.Role;
import com.zemosolabs.user.service.model.User;
import com.zemosolabs.user.service.model.UserSettings;
import com.zemosolabs.user.service.repository.UserRepository;
import com.zemosolabs.user.service.repository.UserSettingsRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final UserSettingsRepository settingsRepository;

    private final ModelMapper modelMapper;

    @Override
    public UserDTO findById(String userId) {
        Optional<User> user = userRepository.findById(UUID.fromString(userId));
        return user.map(value -> modelMapper.map(value, UserDTO.class)).orElse(null);
    }

    @Transactional(Transactional.TxType.REQUIRED)
    public UserDTO save(UserDTO dtoUser) {
        User user = modelMapper.map(dtoUser, User.class);
        user = saveUser(user);
        return modelMapper.map(user, UserDTO.class);
    }

    private User saveUser(User user) {
        user.setSettings(saveUserSettings(user.getSettings()));
        user.setCreated(new Date());
        user.setRole(Role.Type.USER.valueOf());
        return userRepository.save(user);
    }

    private UserSettings saveUserSettings(UserSettings settings) {
        return settingsRepository.save(settings);
    }

    @Override
    public UserDTO findByEmail(String email) {
        User user = userRepository.findByEmail(email).orElse(null);
        if(user==null){
            return null;
        }
        else {
            return modelMapper.map(user, UserDTO.class);
        }

    }

}
