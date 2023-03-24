import { rest } from 'msw';
import { db } from '../db';

export const contractHandler = [
  rest.get('/api/contracts', (req, res, ctx) => {
    const contracts = db.contract.getAll();

    return res(ctx.status(200), ctx.json(contracts));
  }),

  rest.get('/api/contracts/approved', (req, res, ctx) => {
    const contracts = db.contract.findMany({
      where: {
        status: {
          code: {
            equals: 'AVAIL',
          },
        },
      },
    });

    return res(ctx.status(200), ctx.json(contracts));
  }),
];
