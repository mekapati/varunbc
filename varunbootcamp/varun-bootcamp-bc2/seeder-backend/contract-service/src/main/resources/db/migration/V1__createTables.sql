BEGIN TRANSACTION;

CREATE TABLE contract_status
(
  code character(5),
name varchar(25) NOT NULL,
PRIMARY KEY (code)
);

CREATE TABLE IF NOT EXISTS contract_type
(
  code character(5),
name varchar(25) NOT NULL,
CONSTRAINT contract_type_pkey PRIMARY KEY (code)
);

CREATE TABLE currency
(
  code character(5),
name varchar(25) NOT NULL,
PRIMARY KEY (code)
);

CREATE TABLE contract
(
  id uuid,
  name varchar(30) NOT NULL,
type character(5) NOT NULL,
currency character(5) NOT NULL,
value numeric(18,2) NOT NULL,
financed numeric(18,2),
status character(5) NOT NULL,
source varchar(25) NOT NULL,
reject_reason varchar(30),
created date NOT NULL,
updated date,
PRIMARY KEY (id),
CONSTRAINT type FOREIGN KEY (type)
REFERENCES contract_type (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID,
CONSTRAINT currency FOREIGN KEY (currency)
REFERENCES currency (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID,
CONSTRAINT status FOREIGN KEY (status)
        REFERENCES contract_status (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID
);

CREATE TABLE contract_history
(
  id uuid,
  contract_id uuid NOT NULL,
  field_name varchar(25) NOT NULL,
updated_by uuid NOT NULL,
updated_on date NOT NULL,
PRIMARY KEY (id),
CONSTRAINT contract_id FOREIGN KEY (contract_id)
REFERENCES contract (id) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID
);

CREATE TABLE sync_status
(
  code character(5),
name varchar(25) NOT NULL,
PRIMARY KEY (code)
);

CREATE TABLE contract_sync
(
  id uuid,
  source uuid NOT NULL,
  status character(5) NOT NULL,
error varchar(20),
created date NOT NULL,
retry_count integer,
updated date,
records numeric(18,2) NOT NULL,
PRIMARY KEY (id),
CONSTRAINT status FOREIGN KEY (status)
        REFERENCES sync_status (code) MATCH SIMPLE
ON UPDATE NO ACTION
ON DELETE NO ACTION
NOT VALID
);

INSERT INTO public.contract_status(code, name) VALUES('AVAIL', 'Available'), ('REJTD', 'Rejected');

INSERT INTO public.contract_type(code, name) VALUES('ANUAL', 'Annually');

INSERT INTO public.currency(code, name) values('USD', 'US Dollars');

INSERT INTO public.contract(id, name, type, currency, value, financed, status, source, reject_reason, created, updated)
VALUES ('dd56f197-acde-4066-bf78-88be20ae9ef4', 'Contract 1', 'ANUAL', 'USD', 408371.23, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('2b0ef171-cf68-46a1-baad-cc1f4871523c', 'Contract 2', 'ANUAL', 'USD', 308235.40, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('288e01b1-0ee4-43db-a722-7950072cb67e', 'Contract 3', 'ANUAL', 'USD', 293386.28, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('7b9bc588-fb7e-11ec-b939-0242ac120002', 'Contract 4', 'ANUAL', 'USD', 591238.92, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('82896b66-fb7e-11ec-b939-0242ac120002', 'Contract 5', 'ANUAL', 'USD', 311488.39, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('8822ca5e-fb7e-11ec-b939-0242ac120002', 'Contract 6', 'ANUAL', 'USD', 983748.34, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('975ce9e6-fb7e-11ec-b939-0242ac120002', 'Contract 7', 'ANUAL', 'USD', 458117.84, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('9c906e74-fb7e-11ec-b939-0242ac120002', 'Contract 8', 'ANUAL', 'USD', 783904.12, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('2cc52c14-fb7f-11ec-b939-0242ac120002', 'Contract 9', 'ANUAL', 'USD', 391284.38, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('30d93c5a-fb7f-11ec-b939-0242ac120002', 'Contract 10', 'ANUAL', 'USD', 412814.84, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('17b0c526-fc8e-11ec-b939-0242ac120002', 'Contract 11', 'ANUAL', 'USD', 495860.32, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('43a98e3e-d69d-44c7-bce2-ef91fc2c6746',
'Contract 12', 'ANUAL', 'USD', 857493.11, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('73eb8c54-fc8e-11ec-b939-0242ac120002',
'Contract 13', 'ANUAL', 'USD', 184759.95, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('f51b837f-1a03-4c0c-b675-24e7bd88e551',
'Contract 14', 'ANUAL', 'USD', 748932.33, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('85267bfa-fc8e-11ec-b939-0242ac120002',
'Contract 15', 'ANUAL', 'USD', 128375.38, 0, 'AVAIL', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('8710f2ec-fc8e-11ec-b939-0242ac120002',
'Contract 16', 'ANUAL', 'USD', 482571.23, 0, 'REJTD', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('8ec8c924-fc8e-11ec-b939-0242ac120002',
'Contract 17', 'ANUAL', 'USD', 847586.84, 0, 'REJTD', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('17ed3713-2261-4644-a0e8-b81e5c92639f',
'Contract 18', 'ANUAL', 'USD', 943222.34, 0, 'REJTD', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('8fab599c-a43b-45f3-b219-025211f52c3f',
'Contract 19', 'ANUAL', 'USD', 438457.12, 0, 'REJTD', 'none', 'none', CURRENT_DATE, CURRENT_DATE),
('90d86191-de64-4abd-88c7-4f69661ca09f',
'Contract 20', 'ANUAL', 'USD', 478583.48, 0, 'REJTD', 'none', 'none', CURRENT_DATE, CURRENT_DATE);

COMMIT TRANSACTION;