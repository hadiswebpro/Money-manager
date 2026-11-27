export type ReportPeriod = "weekly" | "monthly" | "yearly" | "custom";

export interface ReportSummary {
  totalIncome: number;
  totalExpenses: number;
  netSavings: number;
  transactionCount: number;
}

export interface Report {
  period: ReportPeriod;
  startDate: string;
  endDate: string;
  summary: ReportSummary;
}
