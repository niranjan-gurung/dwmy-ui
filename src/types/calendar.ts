export type CalendarCell = {
  day: number,
  isCurrentMonth: boolean,
  isToday: boolean,
  fullDate: Date
}

export type CalendarGridOptions = {
  fixedGrid?: boolean
}