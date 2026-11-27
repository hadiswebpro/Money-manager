import type { TransactionType } from "./transaction.types";

export type RecurrenceFrequency = "daily" | "weekly" | "monthly" | "yearly";

export interface RecurringTransaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  categoryId: string;
  walletId: string;
  note?: string;
  frequency: RecurrenceFrequency;
  interval: number;
  startDate: string;
  endDate?: string;
  nextOccurrenceDate: string;
  isActive: boolean;
  createdAt: string;
}

export type CreateRecurringTransactionInput = Omit<RecurringTransaction, "id" | "nextOccurrenceDate" | "createdAt">;
export type UpdateRecurringTransactionInput = Partial<CreateRecurringTransactionInput>;
