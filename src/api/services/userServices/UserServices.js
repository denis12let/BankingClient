import { $host } from 'api/service';
import { jwtDecode } from 'jwt-decode';

export class UserServices {
  static async registration(user) {
    const { data } = await $host.post('/users/registration', { ...user });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  }
  static async login(user) {
    const { data } = await $host.post('/users/login', { ...user });
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
  }
}
