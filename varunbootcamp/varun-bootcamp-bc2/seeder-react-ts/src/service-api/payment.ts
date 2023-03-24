import Axios from 'axios';
import properties from '../core-utils/properties';

const URL = properties.baseURL;

export class PaymentService {
  static getPayments(): Promise<any> {
    return Axios.get(URL + 'userPayments');
  }
}