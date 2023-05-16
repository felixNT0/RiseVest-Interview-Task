import {AxiosResponse} from 'axios';
import http from '../../api/http';

export type TUserSignUpPayload = {
  first_name: string;
  last_name: string;
  email_address: string;
  password: string;
  date_of_birth: string | any;
  phone_number: string;
  username: string;
};

export type TSignupResponse = AxiosResponse<{
  token: string;
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email_address: string;
  username: string;
  phone_number: string;
  date_of_birth: string | any;
}>;

export const signUpUser = (
  data: TUserSignUpPayload,
): Promise<TSignupResponse> => {
  return http.post('/users', data, {
    hasAuth: false,
  });
};
