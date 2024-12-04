import { $authHost } from 'api/service';

export class TransactionServices {
  static async getAll({ minSum, maxSum, type, dateFrom, dateTo, sortBy = 'date', sortOrder = 'desc' }) {
    const { data } = await $authHost.get('/accounts/transactions', {
      params: {
        minSum,
        maxSum,
        type,
        dateFrom,
        dateTo,
        sortBy,
        sortOrder,
      },
    });
    return data;
  }
  static async getOneById(id) {
    const { data } = await $authHost.get('/accounts/transactions/' + id);
    return data;
  }
  static async getCalendar({ month = 11, year = 2024 }) {
    const { data } = await $authHost.get('/accounts/transactions/calendar', {
      params: {
        month,
        year,
      },
    });
    return data;
  }
  static async getUsersAll({ minSum, maxSum, type, dateFrom, dateTo, sortBy = 'date', sortOrder = 'desc' }) {
    const { data } = await $authHost.get('/accounts/transactions/admin/all', {
      params: {
        minSum,
        maxSum,
        type,
        dateFrom,
        dateTo,
        sortBy,
        sortOrder,
      },
    });
    return data;
  }
  static async delete(id) {
    const { data } = await $authHost.delete('/accounts/transactions/' + id);
    return data;
  }
}
