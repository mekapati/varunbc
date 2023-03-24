import { Contract } from './Contract';

interface Status {
  code: string;
  name: string;
}

export type CashKick = {
  id?: string;
  name: string;
  date?: string;
  status: Status;
  userId: any;
  intRate: number;
  term: number;
  contracts: Contract[];
  paybackAmount?: number;
  created?: Date;
  updated?: string;
};
