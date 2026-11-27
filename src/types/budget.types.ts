export type BudgetPeriod = "monthly" | "weekly" | "custom";

export interface Budget {
  id: string;
  name: string;
  amount: number;
  categoryId?: string;
  period: BudgetPeriod;
  startDate: string;
  endDate?: string;
  alertThreshold: number; // Percentage from 1 to 100
  isActive: boolean;
  createdAt: string;
}

export type CreateBudgetInput = Omit<Budget, "id" | "createdAt">;
export type UpdateBudgetInput = Partial<Omit<CreateBudgetInput, "startDate">>;
