import type { Transaction } from "./transaction.types";

export interface FinancialSummary {
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
  netSavings: number;
}

export interface DashboardData {
  summary: FinancialSummary;
  recentTransactions: Transaction[];
}
