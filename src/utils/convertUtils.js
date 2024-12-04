export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const offset = 3 * 60 * 60 * 1000;
  const localDate = new Date(date.getTime());

  const day = String(localDate.getDate()).padStart(2, '0');
  const month = String(localDate.getMonth() + 1).padStart(2, '0');
  const year = localDate.getFullYear();
  const hours = String(localDate.getHours()).padStart(2, '0');
  const minutes = String(localDate.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
