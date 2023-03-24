import Axios from 'axios';
import properties from '../core-utils/properties';
import { User } from '../model/User';

const URL = properties.baseURL;

export class UserService {
  static getGoogleUser(token: string): Promise<any> {
    return Axios.get('https://' + properties.auth0Domain + '/userinfo', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  static getCurrency(): Promise<any> {
    return Axios.get(URL + 'userSettings');
  }

  static getUser(userId: string | null): Promise<any> {
    return Axios.get(properties.userApiURL + userId);
  }

  static create(user: User): Promise<any> {
    return Axios.post(properties.userApiURL, user);
  }

  static findByEmail(email: string): Promise<any> {
    return Axios.get(properties.userApiURL + 'email/' + email);
  }

  static getUserPayments(userId: string): Promise<any> {
    return Axios.get(properties.cashkickApiURL + 'payments/user/' + userId);
  }
}
