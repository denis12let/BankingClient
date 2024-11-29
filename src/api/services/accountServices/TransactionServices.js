import { $authHost } from 'api/service';

export class TransactionServices {
  static async getAll({ minSum, maxSum, type, dateFrom, dateTo, sortBy = 'date', sortOrder = 'desc' }) {
    const { data } = await $authHost.get('/accounts/transactions', {
      params: {
        _minSum: minSum,
        _maxSum: maxSum,
        _type: type,
        _dateFrom: dateFrom,
        _dateTo: dateTo,
        _sortBy: sortBy,
        _sortOrder: sortOrder,
      },
    });
    return data;
  }
  static async getOneById(id) {
    const { data } = await $authHost.get('/accounts/transactions/' + `${id}`);
    return data;
  }
  static async getCalendar({ month = 11, year = 2024 }) {
    const { data } = await $authHost.get('/accounts/transactions/calendar', {
      params: {
        _month: month,
        _year: year,
      },
    });
    return data;
  }
  static async getUsersAll({ minSum, maxSum, type, dateFrom, dateTo, sortBy = 'date', sortOrder = 'desc' }) {
    const { data } = await $authHost.get('/accounts/transactions/admin/all', {
      params: {
        _minSum: minSum,
        _maxSum: maxSum,
        _type: type,
        _dateFrom: dateFrom,
        _dateTo: dateTo,
        _sortBy: sortBy,
        _sortOrder: sortOrder,
      },
    });
    return data;
  }
  static async delete(id) {
    const { data } = await $authHost.delete('/accounts/transactions/' + `${id}`);
    return data;
  }
}
