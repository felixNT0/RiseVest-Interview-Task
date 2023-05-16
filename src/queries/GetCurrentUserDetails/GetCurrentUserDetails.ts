import http from '../../api/http';
import {UserType} from '../../types/UserType/UserType';

export const QUERY_KEYS_USER_PROFILE_CONTEXT =
  'QUERY_KEYS_USER_PROFILE_CONTEXT';
export const fetchUserProfile = (): Promise<UserType> => http.get('/sessions');
