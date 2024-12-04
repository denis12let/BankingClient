export const generateDatesLastMonth = () => {
  const dates = [];
  const today = new Date();
  const oneMonthAgo = new Date(today);
  oneMonthAgo.setMonth(today.getMonth() - 1);

  for (let d = today; d >= oneMonthAgo; d.setDate(d.getDate() - 1)) {
    dates.push(new Date(d).toISOString().split('T')[0]);
  }

  return dates;
};
