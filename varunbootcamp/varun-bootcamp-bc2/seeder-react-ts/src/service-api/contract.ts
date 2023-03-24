import Axios from 'axios';
import properties from '../core-utils/properties';

const URL =
  properties.contractsURL +
  ':' +
  properties.contractsPort +
  '/api/v1/contracts/';

export class ContractService {
  static getAvailableContracts(): Promise<any> {
    return Axios.get(URL + 'approved');
  }
}
