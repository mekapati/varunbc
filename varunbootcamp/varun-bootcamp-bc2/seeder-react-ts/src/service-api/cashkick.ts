import Axios from 'axios';
import properties from '../core-utils/properties';
import { CashKick } from '../model/CashKick';

const URL = properties.cashkickApiURL;

export class CashkickService {
  static getAll(id: string | null): Promise<any> {
    return Axios.get(URL + id);
  }

  static getAllForUser(userId: string): Promise<any> {
    return Axios.get(URL + userId);
  }

  static postCashKick(cashkick: CashKick): Promise<any> {
    return Axios.post(properties.cashkickApiURL, cashkick);
  }

  static getcashKickContracts(id: string): Promise<any> {
    return Axios.get(URL + 'cashkickContracts/' + id);
  }
}
