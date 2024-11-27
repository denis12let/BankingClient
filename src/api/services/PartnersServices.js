import { apiService } from 'api/service';

export class PartnersServices {
  static async getAll() {
    const { data } = await apiService.get('/bank/partners');
    return data;
  }
  static async getOne(id) {
    const { data } = await apiService.get('/bank/partners/' + `${id}`);
    return data;
  }
}
