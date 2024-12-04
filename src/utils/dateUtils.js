export const generateDatesLastMonth = () => {
  const dates = [];
  const today = new Date();
  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(today.getMonth() - 1);

  for (let d = new Date(today); d >= oneMonthAgo; d.setDate(d.getDate() - 1)) {
    dates.push(new Date(d).toLocaleDateString());
  }

  return dates;
};

export const convertDateToISO = (date) => {
  const [day, month, year] = date.split('.');

  return `${year}-${month}-${day}`;
};
