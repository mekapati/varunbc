import { rest } from 'msw';
import { User } from '../../model/User';
import { db, usdCurrency, userRole } from '../db';

export const userHandler = [
  rest.get('/api/user', (req, res, ctx) => {
    const email = req.url.searchParams.get('email') + '';
    const user = db.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    return res(ctx.status(200), ctx.json(user));
  }),

  rest.post('/api/user', (req, res, ctx) => {
    const user = req.body as User;

    const createdUser = db.user.create({
      email: user.email,
      role: userRole,
    });

    db.userSettings.create({
      id: createdUser.id,
      interestRate: 12,
      currency: usdCurrency,
      availableCredit: 1120000,
      termCap: 12,
    });

    return res(ctx.status(200), ctx.json(createdUser));
  }),

  rest.get('/api/user/*/settings', (req, res, ctx) => {
    const userId: string = req.params[0].toString();
    const userSettings = db.userSettings.findFirst({
      where: {
        id: {
          equals: userId,
        },
      },
    });
    return res(ctx.status(200), ctx.json(userSettings));
  }),

  rest.get('/api/user/*/payments', (req, res, ctx) => {
    const userId: string = req.params[0].toString();
    const cashkicks: any[] = db.cashkick.findMany({
      where: {
        userId: {
          equals: userId + '',
        },
      },
    });

    if (cashkicks !== null && cashkicks.length > 0) {
      const cashkickIds = cashkicks.flatMap((c) => c.id);
      const userPayments = db.userPayment.getAll();
      userPayments.filter((up) => cashkickIds.indexOf(up.cashkickId) !== -1);

      return res(ctx.status(200), ctx.json(userPayments));
    }

    return res(ctx.status(200), ctx.json([]));
  }),
];
