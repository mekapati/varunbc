package com.zemosolabs.contract.service.dto;

import com.zemosolabs.contract.service.model.ContractStatus;
import com.zemosolabs.contract.service.model.ContractType;
import lombok.*;
import java.util.Date;

@Data
public class ContractDTO {

    private String id;
    private String name;
    private double value;
    private double financed;
    private ContractStatus status;
    private ContractType type;
    private String source;
    private String rejectReason;
    private Date created;
    private Date updated;
}
