import { $authHost, $host } from 'api/service';
import { jwtDecode } from 'jwt-decode';

export class UserServices {
  static async registration(userData) {
    const { data } = await $host.post('/users/registration', { ...userData });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  }
  static async login(userData) {
    const { data } = await $host.post('/users/login', { ...userData });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  }
  static async check() {
    const { data } = await $host.get('/users/auth');
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  }
  static async update(userData) {
    const { data } = await $authHost.put('/users/', { ...userData });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  }
  static async get() {
    const { data } = await $authHost.get('/users/');
    return data;
  }
  static async getOneById(id) {
    const { data } = await $authHost.get('/users/admin/id/' + id);
    return data;
  }
  static async getOneByEmail(email) {
    const { data } = await $authHost.get('/users/admin/email/' + email);
    return data;
  }
  static async getAll({ email = '' }) {
    const { data } = await $authHost.get('/users/admin/all', {
      params: {
        email,
      },
    });
    return data;
  }
  static async create(userData) {
    const { data } = await $authHost.post('/users/admin/', { ...userData });
    return data;
  }
  static async delete(id) {
    const { data } = await $authHost.delete('/users/admin/' + id);
    return data;
  }
}
