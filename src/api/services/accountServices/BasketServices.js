import { $authHost } from 'api/service';

export class BasketServices {
  static async getAll({ type = '' }) {
    const { data } = await $authHost.get('/accounts/basket/services', {
      params: {
        _type: type,
      },
    });
    return data;
  }
  static async getBasketSize() {
    const { data } = await $authHost.get('/accounts/basket');
    return data;
  }
  static async getServiceById(id) {
    const { data } = await $authHost.get('/accounts/basket/services/' + id);
    return data;
  }
  static async addService(serviceData) {
    const { data } = await $authHost.post('/accounts/basket/services/' + serviceData.id, { ...serviceData });
    return data;
  }
  static async deleteService(id) {
    const { data } = await $authHost.delete('/accounts/basket/services/' + id);
    return data;
  }
}
