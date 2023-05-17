import navigationString from '../navigations/navigationString';
import CreatePlanScreen from '../screens/CreatePlan/CreatePlanScreen';
import ErrorScreen from '../screens/ErrorScreen/ErrorScreen';
import FundPlanScreen from '../screens/FundPlan/FundPlanScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import PlansScreen from '../screens/Plans/PlansScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import ViewPlanDetailScreen from '../screens/ViewPlanDetail/ViewPlanDetailScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';

export const allRoutes = [
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
  {
    key: 8,
    component: PlansScreen,
    name: navigationString.ALL_PLANS,
  },
  {
    key: 9,
    component: ViewPlanDetailScreen,
    name: navigationString.VIEW_SPECIFIC_PLAN,
  },
  {
    key: 10,
    component: ErrorScreen,
    name: navigationString.ERROR_SCREEN,
  },
];
