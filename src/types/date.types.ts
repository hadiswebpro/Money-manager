export type DateString = string; // ISO date: YYYY-MM-DD

export type CalendarView = "month" | "week" | "day";

export interface CalendarDay {
  date: DateString;
  isCurrentMonth: boolean;
  isToday: boolean;
}
