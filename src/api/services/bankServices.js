import { $host } from 'api/service';

export class BankServices {
  static async getOne() {
    const { data } = await $host.get('/bank');
    return data;
  }
}
