import { $host } from 'api/service';
import { jwtDecode } from 'jwt-decode';

export class UserServices {
  static async registration(user) {
    try {
      const { data } = await $host.post('/users/registration', { ...user });
      localStorage.setItem('token', data.token);
      return jwtDecode(data.token);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
}
