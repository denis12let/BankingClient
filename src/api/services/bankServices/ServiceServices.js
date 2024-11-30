import { $authHost, $host } from 'api/service';

export class ServiceServices {
  static async getAll({ type = '' }) {
    const { data } = await $host.get('/bank/services', {
      params: {
        _type: type,
      },
    });
    return data;
  }
  static async getOneById(id) {
    const { data } = await $host.get('/bank/services/' + id);
    return data;
  }
  static async create(partnerData) {
    const { data } = await $authHost.post('/bank/services/admin/', { ...partnerData });
    return data;
  }
  static async update(id, partnerData) {
    const { data } = await $authHost.put('/bank/services/admin/' + id, { ...partnerData });
    return data;
  }
  static async delete(id) {
    const { data } = await $authHost.delete('/bank/services/admin/' + id);
    return data;
  }
}
