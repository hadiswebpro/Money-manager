import type { TransactionType } from "./transaction.types";

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
  color: string;
  icon: string;
  isDefault: boolean;
  createdAt: string;
}

export type CreateCategoryInput = Omit<Category, "id" | "isDefault" | "createdAt">;
export type UpdateCategoryInput = Partial<Pick<Category, "name" | "color" | "icon">>;
