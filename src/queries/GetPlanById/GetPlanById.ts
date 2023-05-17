import http from '../../api/http';

export type Plans = {
  id: string;
  created_at: string;
  amount: number;
  plan_id: string;
};

export type TGetAllPlansResponse = {
  id: string;
  created_at: string;
  plan_name: string;
  invested_amount: number;
  total_returns: number;
  target_amount: number;
  maturity_date: string;
  user_id: string;
  returns: Plans[];
};

export const GET_PLANS_BY_ID = 'GET_PLANS_BY_ID';

export const getPlanById = (id: string): Promise<TGetAllPlansResponse> => {
  return http.get(`/plans/${id}`);
};
