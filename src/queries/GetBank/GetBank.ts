import {AxiosResponse} from 'axios';
import http from '../../api/http';

export const getBank = (): Promise<AxiosResponse<any>> => {
  return http.get('/banks');
};
