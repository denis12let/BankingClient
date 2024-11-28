import { apiService } from 'api/service';

export class BankServices {
  static async getOne() {
    const { data } = await apiService.get('/bank');
    return data;
  }
}
