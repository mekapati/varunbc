export type Payment = {
  id: string;
  dueDate: Date;
  status: string;
  expected: number;
  outstanding: number;
};
