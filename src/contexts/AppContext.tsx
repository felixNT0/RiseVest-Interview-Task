import {useNavigation} from '@react-navigation/native';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import navigationString from '../navigations/navigationString';
import {
  QUERY_KEYS_USER_PROFILE_CONTEXT,
  fetchUserProfile,
} from '../queries/GetCurrentUserDetails/GetCurrentUserDetails';
import {UserType} from '../types/UserType/UserType';
import {getAuthToken, removeAuthToken} from '../utils/localStorage';

export interface UserContextType extends UserType {
  isLoggedIn?: boolean | null;
}

export const defaultUser: UserContextType = {
  token: '',
  id: '',
  created_at: '',
  first_name: '',
  last_name: '',
  email_address: '',
  username: '',
  phone_number: '',
  date_of_birth: '',
  total_balance: 0,
  total_returns: null,
  isLoggedIn: null,
};

type UserContext = {
  currentUser: UserContextType;
  logout: () => void;
  updateCurrentUser: () => void;
  isLoading: boolean;
};

const UserContext = createContext<UserContext>({
  currentUser: defaultUser,
  updateCurrentUser: () => {},
  logout: () => {},
  isLoading: false,
});

export default function AppProvider({children}: any) {
  const [currentUser, setCurrentUser] = useState<UserContextType>(defaultUser);
  const [token, setToken] = useState('');

  const navigation: any = useNavigation();

  const getAccessTokenValue = async () => {
    const accessToken = await getAuthToken();
    setToken(accessToken as string);
  };

  const {refetch, isLoading} = useQuery(
    [QUERY_KEYS_USER_PROFILE_CONTEXT],
    fetchUserProfile,
    {
      enabled: !!token,
      onSuccess: (res: any) => {
        setCurrentUser(() => ({...res, isLoggedIn: true}));
      },
      onError: () => {
        setCurrentUser(() => ({...defaultUser, isLoggedIn: false}));
        logout();
      },
    },
  );

  const logout = () => {
    removeAuthToken();
    setCurrentUser(() => ({...defaultUser, isLoggedIn: false}));
  };

  useEffect(() => {
    getAccessTokenValue();
  }, [token]);

  useEffect(() => {
    if (currentUser.isLoggedIn === false) {
      navigation.navigate(navigationString.SIGN_IN);
    }
  }, [currentUser.isLoggedIn, navigation]);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        logout,
        updateCurrentUser: refetch,
        isLoading,
      }}>
      {children}
    </UserContext.Provider>
  );
}

export const useAppContext = () => useContext(UserContext);
