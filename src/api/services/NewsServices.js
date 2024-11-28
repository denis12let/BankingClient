import { $host } from 'api/service';

export class NewsServices {
  static async getAll() {
    const { data } = await $host.get(`/bank/news`);
    return data;
  }
}
