BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS role
(
    code varchar(3),
    name varchar(25) NOT NULL,
    CONSTRAINT role_pkey PRIMARY KEY (code)
);

CREATE TABLE settings
(
  	id uuid NOT NULL,
    interest_rate numeric(5,2) NOT NULL,
    currency character(10) NOT NULL,
    available_credit numeric(18,2) NOT NULL,
    term_cap numeric(18,2) NOT	NULL,
	PRIMARY KEY (id)
);

CREATE TABLE client
(
    id uuid,
    email varchar(40) NOT NULL,
    phone varchar(15),
    active boolean,
    creds_expired boolean,
    created date NOT NULL,
    updated date,
    role varchar(5) NOT NULL,
	settings uuid,
    PRIMARY KEY (id),
    CONSTRAINT role FOREIGN KEY (role)
        REFERENCES "role" (code) MATCH SIMPLE,
	CONSTRAINT settingsFK FOREIGN KEY (settings)
	REFERENCES settings(id)



);

CREATE TABLE IF NOT EXISTS bank
(
    id uuid,
    name character(30) NOT NULL,
    user_id uuid NOT NULL,
    account_number character(30) NOT NULL,
    swift_code character(25) NOT NULL,
    created date NOT NULL,
    update date,
    active boolean,
    verified boolean,
    CONSTRAINT id PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES client (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE Sub_Acc_System
(
    id uuid,
    sys_name character(25) NOT NULL,
    user_id uuid NOT NULL,
    integration_id character(30) NOT NULL,
    active boolean,
    verified boolean,
    created date NOT NULL,
    updated date,
    PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES client (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE INDEX idx_user
ON client (id);

INSERT INTO ROLE VALUES ('USR', 'user');
INSERT INTO ROLE VALUES ('ADM', 'admin');

COMMIT TRANSACTION;