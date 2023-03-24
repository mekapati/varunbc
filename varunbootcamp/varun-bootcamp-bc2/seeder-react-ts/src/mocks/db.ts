import { factory, nullable, oneOf, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

export const db = factory({
  user: {
    id: primaryKey(faker.datatype.uuid),
    email: () => faker.internet.email(),
    phone: () => faker.phone.number(),
    role: oneOf('role'),
    active: () => true,
    credsExpired: () => false,
    created: Date,
    updated: nullable(Date),
  },
  role: {
    code: primaryKey(String),
    name: String,
  },
  userSettings: {
    id: primaryKey(String),
    interestRate: Number,
    currency: oneOf('currency'),
    availableCredit: Number,
    termCap: Number,
  },
  contract: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.company.companyName(),
    type: oneOf('contractType'),
    currency: () => 'USD',
    userId: String,
    value: () => faker.finance.amount(1000, 1000000, 2),
    financed: nullable(Number),
    status: oneOf('contractStatus'),
    source: nullable(String),
    rejectReason: nullable(String),
    created: Date,
    updated: nullable(Date),
  },
  contractType: {
    code: primaryKey(String),
    name: String,
  },
  contractStatus: {
    code: primaryKey(String),
    name: String,
  },
  currency: {
    code: primaryKey(() => faker.finance.currencyCode()),
    name: () => faker.finance.currencyName(),
  },
  cashkick: {
    id: primaryKey(faker.datatype.uuid),
    name: String,
    userId: String,
    status: oneOf('cashkickStatus'),
    contracts: Array,
    interestRate: Number,
    term: Number,
    maturity: Date,
    created: Date,
    updated: nullable(Date),
    paybackAmount: Number,
  },
  cashkickContract: {
    id: primaryKey(faker.datatype.uuid),
    cashkickId: String,
    contractId: String,
    amount: Number,
  },
  cashkickStatus: {
    code: primaryKey(String),
    name: String,
  },
  cashkickPayment: {
    id: primaryKey(faker.datatype.uuid),
    cashkickId: oneOf('cashkick'),
    user: nullable(oneOf('user')),
    bank: () => faker.finance.accountName(),
    mode: String,
    transactionId: String,
    amount: Number,
    created: Date,
  },
  userPaymentStatus: {
    code: primaryKey(String),
    name: String,
  },
  userPayment: {
    id: primaryKey(faker.datatype.uuid),
    cashkickId: oneOf('cashkick'),
    expected: Number,
    outstanding: Number,
    dueDate: Date,
    status: oneOf('userPaymentStatus'),
    created: Date,
    updated: Date,
  },
});

export const contractPending = db.contractStatus.create({
  code: 'PNRVW',
  name: 'Pending',
});
export const contractApproved = db.contractStatus.create({
  code: 'AVAIL',
  name: 'Available',
});
export const contractRejected = db.contractStatus.create({
  code: 'REJTD',
  name: 'Rejected',
});

const annualContract = db.contractType.create({
  code: 'ANUAL',
  name: 'Annually',
});

export const usdCurrency = db.currency.create({
  code: 'USD',
  name: 'USD',
});

export const userRole = db.role.create({
  code: 'USER',
  name: 'User',
});

export const upcomingPayment = db.userPaymentStatus.create({
  code: 'UPC',
  name: 'Upcoming',
});

export const pendingCashkick = db.cashkickStatus.create({
  code: 'PNR',
  name: 'Pending',
});

export const user = db.user.create({
  role: userRole,
});

const saveUserInLocalStorage = () => {
  localStorage.setItem('userId', user.id);
};
saveUserInLocalStorage();

const createApprovedContracts = (contractUser: any) => {
  for (let index = 0; index < 10; index++) {
    db.contract.create({
      type: annualContract,
      currency: 'USD',
      status: contractApproved,
      userId: contractUser.id,
    });
  }
};

const createRejectedContracts = (contractUser: any) => {
  for (let index = 0; index < 5; index++) {
    db.contract.create({
      type: annualContract,
      currency: 'USD',
      status: contractRejected,
      userId: contractUser.id,
    });
  }
};

const createPendingContracts = (contractUser: any) => {
  for (let index = 0; index < 5; index++) {
    db.contract.create({
      type: annualContract,
      currency: 'USD',
      status: contractPending,
      userId: contractUser.id,
    });
  }
};
export const createContractsForUser = (contractUser: any) => {
  createApprovedContracts(contractUser);
  createRejectedContracts(contractUser);
  createPendingContracts(contractUser);
};

createContractsForUser(user);

db.userSettings.create({
  id: user.id,
  interestRate: 12,
  currency: usdCurrency,
  availableCredit: 1120000.0,
  termCap: 12,
});
