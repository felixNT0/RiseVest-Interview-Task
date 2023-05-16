import http from '../../api/http';

export type TSellAndBuyRateType = {
  buy_rate: number;
  sell_rate: number;
};

export const GET_BUY_AND_SALE_RATE = 'GET_BUY_AND_SALE_RATE';
export const getSaleAndBuyRate = (): Promise<TSellAndBuyRateType> => {
  return http.get('/rates');
};
