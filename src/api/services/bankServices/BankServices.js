import { $authHost, $host } from 'api/service';

export class BankServices {
  static async getOne() {
    const { data } = await $host.get('/bank');
    return data;
  }
  static async update() {
    const { data } = await $authHost.put('/bank/admin');
    return data;
  }
}
