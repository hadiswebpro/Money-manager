export interface Transfer {
  id: string;
  fromWalletId: string;
  toWalletId: string;
  amount: number;
  date: string; // ISO date: YYYY-MM-DD
  note?: string;
  createdAt: string;
}

export type CreateTransferInput = Omit<Transfer, "id" | "createdAt">;
