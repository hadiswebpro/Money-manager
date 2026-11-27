export type WalletType = "cash" | "bank" | "card" | "savings" | "other";

export interface Wallet {
  id: string;
  name: string;
  type: WalletType;
  openingBalance: number;
  color?: string;
  icon?: string;
  note?: string;
  isArchived: boolean;
  createdAt: string;
}

export type CreateWalletInput = Omit<Wallet, "id" | "createdAt">;
export type UpdateWalletInput = Partial<CreateWalletInput>;
