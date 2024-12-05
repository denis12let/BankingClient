export const validateAuth = ({ email, password, repeatedPassword }, error) => {
  const errors = {};

  if (!email) {
    errors.email = 'Введите email';
  }

  if (!password) {
    errors.password = 'Введите пароль';
  }
  if (repeatedPassword === '' && password) {
    errors.password = 'Подтвердите пароль';
  }

  if (repeatedPassword && repeatedPassword !== password) {
    errors.password = 'Пароли не совпадают';
  }

  if (password && password.length < 5) {
    errors.passwordLength = 'Пароль должен быть не менее 5 символов';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    errors.email = 'Введите верный email';
  }

  if (error) {
    errors.error = error;
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return null;
};

export const validateProfile = ({ name, surname, telephone, identifier }, error) => {
  const errors = {};

  if (!name) {
    errors.name = 'Введите имя';
  }

  if (!surname) {
    errors.surname = 'Введите фамилию';
  }
  if (!telephone) {
    errors.telephone = 'Введите телефон';
  }
  if (!identifier) {
    errors.identifier = 'Введите идентификатор';
  }

  if (error) {
    errors.error = error;
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return null;
};
