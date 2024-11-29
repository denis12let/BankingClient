import { $authHost, $host } from 'api/service';

export class NewsServices {
  static async getAll() {
    const { data } = await $host.get(`/bank/news`);
    return data;
  }
  static async getOneById(id) {
    const { data } = await $host.get('/bank/news/' + `${id}`);
    return data;
  }
  static async create() {
    const { data } = await $authHost.get('/bank/news/admin/');
    return data;
  }
  static async update(id) {
    const { data } = await $authHost.get('/bank/news/admin/' + `${id}`);
    return data;
  }
  static async delete(id) {
    const { data } = await $authHost.get('/bank/news/admin/' + `${id}`);
    return data;
  }
}
