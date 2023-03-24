import { rest } from 'msw';
import properties from '../../core-utils/properties';
import { db } from '../db';

const URL = properties.baseURL;

export const paymentHandler = [
  rest.get(URL + 'payments', (req, res, ctx) => {
    const payments = db.userPayment.getAll();

    return res(ctx.status(200), ctx.json(payments));
  }),
];
