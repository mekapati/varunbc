package com.zemosolabs.contract.service.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="contract_type")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContractType {

    @Id
    private String code;

    @Column
    private String name;

    public enum Type {
        ANNUAL("ANUAL");

        private String code;

        public String getCode() {
            return this.code;
        }

        private Type(String code) {
            this.code = code;
        }

        public ContractType valueOf() {
            ContractType cType = new ContractType();
            cType.setCode(this.getCode());
            return cType;
        }

    }

}
