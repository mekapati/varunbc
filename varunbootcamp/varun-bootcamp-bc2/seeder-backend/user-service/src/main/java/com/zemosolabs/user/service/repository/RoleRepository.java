package com.zemosolabs.user.service.repository;

import com.zemosolabs.user.service.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, String> {


}
