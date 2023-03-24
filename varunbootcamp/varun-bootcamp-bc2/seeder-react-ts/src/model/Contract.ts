interface Status {
  code: string;
  name: string
}

interface Type {
  code: string;
  name: string;
}

export class Contract {
  id!: string;
  name!: string;
  status!: Status;
  type!: Type;
  value!: number;
  termLength!: number;
  totalPayment!: number;
  financed!: number;
}
