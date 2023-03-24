BEGIN TRANSACTION;

CREATE TABLE notification_type
(
  code character(5),
name varchar(25) NOT NULL,
PRIMARY KEY (code)
);

CREATE TABLE notification_status
(
  code character(5),
name varchar(25) NOT NULL,
PRIMARY KEY (code)
);

CREATE TABLE notification
(
  id uuid,
  recipient uuid NOT NULL,
  type character(5) NOT NULL,
message varchar(30) NOT NULL,
created date NOT NULL,
sent date,
status character(5) NOT NULL,
error varchar(25),
retry_count integer,
PRIMARY KEY (id),
CONSTRAINT type FOREIGN KEY (type)
REFERENCES notification_type (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID,
CONSTRAINT status FOREIGN KEY (status)
        REFERENCES notification_status (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID
);CREATE TABLE notification_type
(
  code character(5),
name varchar(25) NOT NULL,
PRIMARY KEY (code)
);

CREATE TABLE notification_status
(
  code character(5),
name varchar(25) NOT NULL,
PRIMARY KEY (code)
);

CREATE TABLE notification
(
  id uuid,
  recipient uuid NOT NULL,
  type character(5) NOT NULL,
message varchar(30) NOT NULL,
created date NOT NULL,
sent date,
status character(5) NOT NULL,
error varchar(25),
retry_count integer,
PRIMARY KEY (id),
CONSTRAINT type FOREIGN KEY (type)
REFERENCES notification_type (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID,
CONSTRAINT status FOREIGN KEY (status)
        REFERENCES notification_status (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID
);

COMMIT TRANSACTION;