import {AxiosResponse} from 'axios';
import http from '../../api/http';

export type RateType = {
  buy_rate: number;
  sell_rate: number;
};

export const getRate = (): Promise<AxiosResponse<RateType>> => {
  return http.get('/rates');
};
