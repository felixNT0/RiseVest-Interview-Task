import CreatePlanScreen from '../screens/CreatePlan/CreatePlanScreen';
import FundPlanScreen from '../screens/FundPlan/FundPlanScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import navigationString from './navigationString';

export const allNavigations = [
  {key: 1, component: WelcomeScreen, name: navigationString.HOME},
  {key: 2, component: SignUpScreen, name: navigationString.SIGN_UP},
  {key: 3, component: LoginScreen, name: navigationString.SIGN_IN},
  {key: 4, component: HomeScreen, name: navigationString.HOME_SCREEN},
  {
    key: 5,
    component: ResetPasswordScreen,
    name: navigationString.RESET_PASSWORD,
  },
  {
    key: 6,
    component: CreatePlanScreen,
    name: navigationString.CREATE_A_PLAN,
  },
  {
    key: 7,
    component: FundPlanScreen,
    name: navigationString.FUND_PLAN,
  },
];
