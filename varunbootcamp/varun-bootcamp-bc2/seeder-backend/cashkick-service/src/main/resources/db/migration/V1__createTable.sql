BEGIN TRANSACTION;

CREATE TABLE payment_status
(
    code character(5),
name varchar(25) NOT NULL,
PRIMARY KEY (code)
);

CREATE TABLE cashkick_status
(
    code character(5),
name varchar(25) NOT NULL,
PRIMARY KEY(code)
);

CREATE TABLE cashkick
(
    id uuid,
    name varchar(25) NOT NULL,
    user_id uuid NOT NULL,
    status character(5) NOT NULL,
int_rate numeric(5,2) NOT NULL,
term integer NOT NULL,
created date NOT NULL,
updated date,
PRIMARY KEY (id),
CONSTRAINT status FOREIGN KEY (status)
        REFERENCES cashkick_status (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID
);

CREATE TABLE cashkick_payment
(
    id uuid,
    cashkick_id uuid NOT NULL,
    user_id uuid,
    bank varchar(30) NOT NULL,
    mode varchar(20) NOT NULL,
    transaction_id varchar(30) NOT NULL,
    amount numeric(18,2) NOT NULL,
created date NOT NULL,
PRIMARY KEY (id),
CONSTRAINT cashkick_id FOREIGN KEY (cashkick_id)
REFERENCES cashkick (id) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID
);

CREATE TABLE cashkick_status_history
(
    id uuid,
    cashkick_id uuid NOT NULL,
    status character(5) NOT NULL,
updated_by uuid NOT NULL,
updated_on date NOT NULL,
PRIMARY KEY (id),
CONSTRAINT cashkick_id FOREIGN KEY (cashkick_id)
REFERENCES cashkick (id) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID,
CONSTRAINT status FOREIGN KEY (status)
        REFERENCES cashkick_status (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID
);

CREATE TABLE cashkick_contract
(
    cashkick_id uuid,
    contract_id uuid,
    amount numeric(18,2) NOT NULL,
PRIMARY KEY (cashkick_id,contract_id),
CONSTRAINT cashkick_id FOREIGN KEY (cashkick_id)
REFERENCES cashkick (id) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID
);

CREATE TABLE user_payment
(
    id uuid,
    cashkick_id uuid NOT NULL,
    expected numeric(18,2) NOT NULL,
outstanding numeric(18,2) NOT NULL,
due_date date NOT NULL,
status character(10) NOT NULL,
created date NOT NULL,
updated date,
PRIMARY KEY (id),
CONSTRAINT cashkick_id FOREIGN KEY (cashkick_id)
REFERENCES cashkick (id) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID,
CONSTRAINT status FOREIGN KEY (status)
        REFERENCES payment_status (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID
);

CREATE INDEX idx_cashkick
ON cashkick (id);

COMMIT TRANSACTION;
