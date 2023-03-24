package com.zemosolabs.user.service.repository;

import com.zemosolabs.user.service.model.UserSettings;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserSettingsRepository extends JpaRepository<UserSettings, UUID> {
}
