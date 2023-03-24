package com.zemosolabs.cashkick.api.dto;

import com.zemosolabs.cashkick.api.model.CashkickStatus;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CashkickDTO {
    private UUID id;

    private String name;
    private UUID userId;
    private CashkickStatus status;
    private double intRate;
    private int term;
    private Date created;
    private Date updated;
    private double value;
    private Date dueDate;
    private double paybackAmount;
    private List<ContractDTO> contracts = new ArrayList<>();

}
