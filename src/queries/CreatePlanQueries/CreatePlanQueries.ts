import http from '../../api/http';

export type TCreatePlanData = {
  plan_name: string;
  target_amount: number;
  maturity_date: string | any;
};

export const createPlan = (data: TCreatePlanData) => {
  return http.post('/plans', data);
};
