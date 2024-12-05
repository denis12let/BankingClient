const { $authHost } = require('api/service');

export class ProfileServices {
  static async getAll() {
    const { data } = await $authHost.get('/users/profiles/admin/all');
    return data;
  }
  static async getOneByUserId(id) {
    const { data } = await $authHost.get('/users/profiles/admin/id/' + id);
    return data;
  }
  static async get() {
    const { data } = await $authHost.get('/users/profiles/');
    return data;
  }
  static async create(profileData) {
    const { data } = await $authHost.post('/users/profiles/', { ...profileData });
    return data;
  }
  static async update(profileData) {
    const { data } = await $authHost.put('/users/profiles/', { ...profileData });
    return data;
  }
}
