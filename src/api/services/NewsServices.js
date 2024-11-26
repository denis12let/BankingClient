export class NewsServices {
  static async getAll() {
    const { data } = await apiService.get(`/bank/news`);
    return data;
  }
}
