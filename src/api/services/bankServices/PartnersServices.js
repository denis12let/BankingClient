import { $authHost, $host } from 'api/service';

export class PartnersServices {
  static async getAll() {
    const { data } = await $authHost.get('/bank/partners');
    return data;
  }
  static async getOne(id) {
    const { data } = await $host.get('/bank/partners/' + `${id}`);
    return data;
  }
}
