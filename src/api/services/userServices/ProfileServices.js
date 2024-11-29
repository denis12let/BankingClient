const { $authHost } = require('api/service');

export class ProfileServices {
  static async getAll() {
    const { data } = await $authHost.get('/users/profile/admin/all');
    return data;
  }
  static async getOneById(id) {
    const { data } = await $authHost.get('/users/profile/admin/id/' + `${id}`);
    return data;
  }
  static async get() {
    const { data } = await $authHost.get('/users/profile/');
    return data;
  }
  static async create(profileData) {
    const { data } = await $authHost.post('/users/profile/', { ...profileData });
    return data;
  }
  static async update(profileData) {
    const { data } = await $authHost.put('/users/profile/', { ...profileData });
    return data;
  }
}
