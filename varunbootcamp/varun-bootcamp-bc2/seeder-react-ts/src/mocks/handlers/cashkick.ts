import { rest } from 'msw';
import { CashKick } from '../../model/CashKick';
import { Contract } from '../../model/Contract';
import { db, pendingCashkick, upcomingPayment } from '../db';

export const cashkickHandler = [
  rest.get('/api/cashkicks', (req, res, ctx) => {
    const cashkick = db.cashkick.getAll();

    return res(ctx.status(200), ctx.json(cashkick));
  }),

  rest.get('/api/cashkicks/*', (req, res, ctx) => {
    const userId: string = req.params[0].toString();
    const cashkick = db.cashkick.findMany({
      where: {
        userId: {
          equals: userId + '',
        },
      },
    });

    return res(ctx.status(200), ctx.json(cashkick));
  }),

  rest.post('/api/cashkicks', (req, res, ctx) => {
    if (req.body !== undefined) {
      const cashkick: CashKick = req.body as CashKick;
      const user = db.user.findFirst({
        where: {
          id: {
            equals: cashkick.userId,
          },
        },
      });

      if (user !== null) {
        const savedCashkick = saveCashkick(cashkick, user.id);
        insertCashkickContracts(savedCashkick.id, cashkick.contracts);
        createUserPayments(savedCashkick);

        return res(ctx.status(200), ctx.json(savedCashkick));
      }
    }

    return res(ctx.status(405));
  }),

  rest.get('/api/cashkick/{id}/userpayments', (req, res, ctx) => {
    const cashkick = db.cashkickPayment.getAll();

    return res(ctx.status(200), ctx.json(cashkick));
  }),

  rest.get('/api/cashkickContracts/:id', (req, res, ctx) => {
    const { id } = req.params;
    const cashkickContracts = db.cashkickContract.findMany({
      where: {
        cashkickId: {
          equals: id + '',
        },
      },
    });

    return res(ctx.status(200), ctx.json(cashkickContracts));
  }),
];

const saveCashkick = (cashkick: CashKick, userId: string) => {
  return db.cashkick.create({
    name: cashkick.name,
    contracts: cashkick.contracts,
    userId: userId,
    status: pendingCashkick,
    interestRate: cashkick.intRate,
    term: cashkick.term,
    maturity: cashkick.date,
    paybackAmount: cashkick.paybackAmount,
  });
};

const insertCashkickContracts = (cashkickId: string, contract: Contract[]) => {
  contract.forEach((contract) => {
    db.cashkickContract.create({
      contractId: contract.id,
      cashkickId: cashkickId,
      amount: contract.value,
    });
  });
};

const createUserPayments = (cashkick: any) => {
  const expectedAmount = cashkick.paybackAmount / cashkick.term;
  let outstandingAmount = cashkick.paybackAmount;

  for (let i = 0; i < cashkick.term; i++) {
    const today = new Date();
    db.userPayment.create({
      cashkickId: cashkick,
      expected: expectedAmount,
      outstanding: (outstandingAmount -= expectedAmount),
      dueDate: new Date(today.setMonth(today.getMonth() + i + 1)).toString(),
      status: upcomingPayment,
    });
  }
};
