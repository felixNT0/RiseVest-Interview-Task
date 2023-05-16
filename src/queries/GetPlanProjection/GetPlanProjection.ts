import {AxiosResponse} from 'axios';
import http from '../../api/http';

export type PlansProjectionPayload = {
  date: any;
  monthly_investment: number;
  target_amount: number;
};

export const GET_PLANS_PROJECTION = 'GET_PLANS_PROJECTION';
export const getPlanProjection = ({
  date,
  monthly_investment,
  target_amount,
}: PlansProjectionPayload): Promise<AxiosResponse<any>> => {
  return http.get(
    `/plans/projection?monthly_investment=${monthly_investment}&target_amount=${target_amount}&maturity_date=${date}`,
  );
};
