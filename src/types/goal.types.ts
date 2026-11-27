export type GoalStatus = "active" | "completed" | "paused";

export interface Goal {
  id: string;
  name: string;
  description?: string;
  targetAmount: number;
  targetDate?: string;
  walletId?: string;
  status: GoalStatus;
  createdAt: string;
}

export type CreateGoalInput = Omit<Goal, "id" | "createdAt">;
export type UpdateGoalInput = Partial<Omit<CreateGoalInput, "createdAt">>;
