import { $authHost, $host } from 'api/service';

export class BankServices {
  static async getOne() {
    const { data } = await $host.get('/bank');
    return data;
  }
  static async update(bankData) {
    const { data } = await $authHost.put('/bank/admin', { ...bankData });
    return data;
  }
}
