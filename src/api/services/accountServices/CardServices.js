import { $authHost } from 'api/service';

export class CardServices {
  static async getAll() {
    const { data } = await $authHost.get('/accounts/cards');
    return data;
  }
  static async getOneById(id) {
    const { data } = await $authHost.get('/accounts/cards/' + `${id}`);
    return data;
  }
  static async create(cardData) {
    const { data } = await $authHost.post('/accounts/cards', { ...cardData });
    return data;
  }
  static async update(id, cardData) {
    const { data } = await $authHost.put('/accounts/cards/' + `${id}`, { ...cardData });
    return data;
  }
  static async updateBalance(transferData) {
    const { data } = await $authHost.post('/accounts/cards/balance', { ...transferData });
    return data;
  }
  static async delete(id) {
    const { data } = await $authHost.delete('/accounts/cards/' + `${id}`);
    return data;
  }
}
