export const probability = (pr) => {
  // Задаем вероятность срабатывания функции (в диапазоне от 0 до 1)
  const probability = pr;

  // Генерируем случайное число от 0 до 10
  const randomValue = Math.floor(Math.random() * 11);

  // Проверяем, превышает ли сгенерированное случайное число пороговую вероятность
  if (randomValue < probability) {
    // Функция срабатывает
    return true;
  } else {
    // Функция не срабатывает
    return false;
  }
};
