package com.zemosolabs.user.service.model;

import lombok.*;

import javax.persistence.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="role")
public class Role {

    @Id
    @Column(name = "code")
    private String code;

    @Column(name="name" , nullable = false)
    private String name;

    public enum Type {

        USER("USR"),
        ADMIN ("ADM");

        private final String code;

        Type(String code) {
            this.code = code;
        }

        public Role valueOf() {
            Role role = new Role();
            role.setCode(this.code);
            return role;
        }
    }

}
