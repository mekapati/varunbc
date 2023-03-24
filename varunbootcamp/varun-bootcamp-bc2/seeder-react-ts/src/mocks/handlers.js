import { cashkickHandler } from './handlers/cashkick';
import { contractHandler } from './handlers/contract';
import { paymentHandler } from './handlers/payment';
import { userHandler } from './handlers/user';

export const handlers = [

  ...contractHandler,
  ...cashkickHandler,
  ...userHandler,
  ...paymentHandler
 
];