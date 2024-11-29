import { $authHost, $host } from 'api/service';

export class PartnerServices {
  static async getAll() {
    const { data } = await $host.get('/bank/partners');
    return data;
  }
  static async getOneById(id) {
    const { data } = await $host.get('/bank/partners/' + `${id}`);
    return data;
  }
  static async create(partnerData) {
    const { data } = await $authHost.post('/bank/partners/admin/', { ...partnerData });
    return data;
  }
  static async update(id, partnerData) {
    const { data } = await $authHost.put('/bank/partners/admin/' + `${id}`, { ...partnerData });
    return data;
  }
  static async delete(id) {
    const { data } = await $authHost.delete('/bank/partners/admin/' + `${id}`);
    return data;
  }
}
