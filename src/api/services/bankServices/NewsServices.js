import { $authHost, $host } from 'api/service';

export class NewsServices {
  static async getAll() {
    const { data } = await $host.get(`/bank/news`);
    return data;
  }
  static async getOneById(id) {
    const { data } = await $host.get('/bank/news/' + id);
    return data;
  }
  static async create(newsData) {
    const { data } = await $authHost.post('/bank/news/admin/', { ...newsData });
    return data;
  }
  static async update(id, newsData) {
    const { data } = await $authHost.put('/bank/news/admin/' + id, { ...newsData });
    return data;
  }
  static async delete(id) {
    const { data } = await $authHost.delete('/bank/news/admin/' + id);
    return data;
  }
}
