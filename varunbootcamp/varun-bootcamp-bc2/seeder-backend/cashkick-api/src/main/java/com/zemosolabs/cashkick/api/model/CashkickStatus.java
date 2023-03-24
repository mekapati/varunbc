package com.zemosolabs.cashkick.api.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "cashkick_status")
@Data
@NoArgsConstructor
public class CashkickStatus {

    @Id
    @GeneratedValue
    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    public enum Status {
        PENDING("PENDG"),
        APPROVED("APPR"),
        REJECTED("REJTD");

        private String code;

        Status(String code) {
            this.code = code;
        }

        public CashkickStatus valueOf() {
            CashkickStatus cStatus = new CashkickStatus();
            cStatus.setCode(code);
            return cStatus;
        }
    }

}



