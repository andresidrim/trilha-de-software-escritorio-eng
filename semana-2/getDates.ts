const totalDays: number = 365;
const totalMonths: number = 12;
const daysInWeek: number = 7;

type Month =
  | "Janeiro"
  | "Fevereiro"
  | "Março"
  | "Abril"
  | "Maio"
  | "Junho"
  | "Julho"
  | "Agosto"
  | "Setembro"
  | "Outubro"
  | "Novembro"
  | "Dezembro";

type Day =
  | "Segunda"
  | "Terça"
  | "Quarta"
  | "Quinta"
  | "Sexta"
  | "Sabado"
  | "Domingo";

const daysInMonth: Record<Month, number> = {
  Janeiro: 31,
  Fevereiro: 28,
  Março: 31,
  Abril: 30,
  Maio: 31,
  Junho: 30,
  Julho: 31,
  Agosto: 31,
  Setembro: 30,
  Outubro: 31,
  Novembro: 30,
  Dezembro: 31,
};

const firstDay: Day = "Quarta";

const amountOfWeekDays = 52;

const weekdays: Day[] = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
  "Domingo",
];

function getWeekdayDates(
  firstDay: Day,
  targetDay: Day,
): Record<Month, number[]> {
  let currentWeekdayIndex = weekdays.indexOf(firstDay);
  const targetDayIndex = weekdays.indexOf(targetDay);

  let res: Record<Month, number[]> = {} as Record<Month, number[]>;

  for (const month in daysInMonth) {
    const monthName = month as Month;
    res[monthName] = [];

    for (let day = 1; day <= daysInMonth[monthName]; day++) {
      if (currentWeekdayIndex === targetDayIndex) {
        res[monthName].push(day);
      }

      currentWeekdayIndex = (currentWeekdayIndex + 1) % daysInWeek;
    }
  }

  return res;
}

console.log(getWeekdayDates("Quarta", "Sexta"));
