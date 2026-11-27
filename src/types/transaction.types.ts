export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  categoryId: string;
  walletId: string;
  date: string; // ISO date: YYYY-MM-DD
  note?: string;
  createdAt: string;
  updatedAt?: string;
}

export type CreateTransactionInput = Omit<Transaction, "id" | "createdAt" | "updatedAt">;
export type UpdateTransactionInput = Partial<CreateTransactionInput>;
