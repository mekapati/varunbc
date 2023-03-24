package com.zemosolabs.user.service.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "client")
public class User {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column
    private UUID id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name="active")
    private boolean active;

    @Column(name="creds_expired")
    private boolean credsExpired;

    @Column(name="created")
    private Date created;

    @ManyToOne
    @JoinColumn(name = "role")
    private Role role;

    @OneToOne
    @JoinColumn(name = "settings")
    private UserSettings settings;

}
