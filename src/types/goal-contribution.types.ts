export interface GoalContribution {
  id: string;
  goalId: string;
  amount: number;
  date: string;
  note?: string;
  createdAt: string;
}

export type CreateGoalContributionInput = Omit<GoalContribution, "id" | "createdAt">;
