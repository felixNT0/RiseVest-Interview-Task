import {AxiosResponse} from 'axios';
import http from '../../api/http';

export type QuoteType = {
  quote: string;
  author: string;
};

export const GET_DAILY_QUOTE = 'GET_DAILY_QUOTE';
export const getDailyQuotes = (): Promise<AxiosResponse<QuoteType>> => {
  return http.get('/quotes');
};
