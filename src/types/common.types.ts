export type ID = string;

export type SortDirection = "asc" | "desc";

export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface SelectOption<T extends string = string> {
  label: string;
  value: T;
}
