interface Settings {
  interestRate: number;
  currency: String;
  availableCredit: number;
  termCap: number;
}
export class User {
  id!: string;
  email!: string;
  phone: string;
  active: boolean;
  settings: Settings;

  constructor(
    email: string,
    phone: string,
    active: boolean,
    settings: Settings,
  ) {
    this.email = email;
    this.phone = phone;
    this.active = active;
    this.settings = settings;
  }
}
