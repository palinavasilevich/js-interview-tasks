/**
 * 📝 Расчет стоимости проживания в отеле
 *
 *  Необходимо написать функцию bookingCalculate(nights, checkInDate), 
 *  которая рассчитывает стоимость проживания в отеле. 
 * 
 *  Условия:
    Функция принимает два аргумента:
    nights (обязательный) — количество ночей проживания.
    checkInDate (необязательный) — дата заселения. Если не указана, используется текущая дата.
    Стоимость проживания зависит от дня недели:
    Будние дни (понедельник–пятница) — 1500 руб.
    Выходные дни (суббота и воскресенье) — 2200 руб.
 *
 * @param {number} nights
 * @param {string} checkInDate
 * @returns {number}
 *
 * @example
    Input 1: 1, new Date("2023-11-11")
    Output 1: 2200

    Input 2: 5, new Date("2023-11-06")
    Output 2: 7500
 */

const prices = {
  weekday: 1500,
  holiday: 2200,
};

export function bookingCalculate1(nights, checkInDate = new Date()) {
  if (!nights || nights < 1) return 0;
  let totalPrice = 0;

  const dayWeekOfCheckIn = checkInDate.getDay();

  for (let i = 0; i < nights; i++) {
    const currentDayWeek = dayWeekOfCheckIn + i;

    if (currentDayWeek % 7 === 6 || currentDayWeek % 7 === 0) {
      totalPrice += prices.holiday;
    } else {
      totalPrice += prices.weekday;
    }
  }

  return totalPrice;
}

export function bookingCalculate(nights, checkInDate = new Date()) {
  if (!nights || nights < 1) return 0;
  let totalPrice = 0;

  for (let i = 0; i < nights; i++) {
    const currentDate = new Date(checkInDate);
    currentDate.setDate(checkInDate.getDate() + i);

    const day = currentDate.getDay();
    totalPrice += day === 0 || day === 6 ? prices.holiday : prices.weekday;
  }

  return totalPrice;
}
