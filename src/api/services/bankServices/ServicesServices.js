import { $authHost, $host } from 'api/service';

export class ServicesServices {
  static async getAll() {
    const { data } = await $host.get('/bank/partners');
    return data;
  }
  static async getOneById(id) {
    const { data } = await $host.get('/bank/partners/' + `${id}`);
    return data;
  }
  static async create() {
    const { data } = await $authHost.get('/bank/partners/admin/');
    return data;
  }
  static async update(id) {
    const { data } = await $authHost.get('/bank/partners/admin/' + `${id}`);
    return data;
  }
  static async delete(id) {
    const { data } = await $authHost.get('/bank/partners/admin/' + `${id}`);
    return data;
  }
}
