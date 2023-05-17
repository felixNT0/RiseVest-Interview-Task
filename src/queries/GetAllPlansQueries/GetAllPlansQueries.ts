import http from '../../api/http';

export type TPlanType = {
  id: string;
  created_at: string;
  plan_name: string;
  invested_amount: number;
  total_returns: number;
  target_amount: number;
  maturity_date: string;
  user_id: string;
};

export type TGetAllPlansResponse = {
  item_count: number;
  items: TPlanType[];
};

export const GET_ALL_PLANS = 'GET_ALL_PLANS';

export const getAllPlans = (): Promise<TGetAllPlansResponse> => {
  return http.get('/plans');
};
