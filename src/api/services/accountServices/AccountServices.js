import { $authHost } from 'api/service';

export class AccountServices {
  static async get() {
    const { data } = await $authHost.get('/accounts');
    return data;
  }
  static async updateBalance(transferData) {
    const { data } = await $authHost.post('/accounts/balance', { ...transferData });
    return data;
  }
}
