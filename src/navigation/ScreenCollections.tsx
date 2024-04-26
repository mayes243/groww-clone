import HomeScreen from "../screens/dashboard/HomeScreen";
import EmailPasswordScreen from "../screens/auth/EmailPasswordScreen";
import EmailOtpScreen from "../screens/auth/EmailOtpScreen";
import PinScreen from "../screens/auth/PinScreen";
import AccountProtectedScreen from "../screens/auth/AccountProtectedScreen";
import PersonalDetailScreen from "../screens/auth/PersonalDetailScreen";
import ConfirmPinScreen from "../screens/auth/ConfirmPinScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import EmailScreen from "../screens/auth/EmailScreen";
import SetPasswordScreen from "../screens/auth/SetPasswordScreen";
import PhoneScreen from "../screens/auth/PhoneScreen";
import ForgotPassword from "../screens/auth/ForgotPassword";
import AuthVerificationScreen from "../screens/auth/AuthVerificationScreen";

export const authStacks = [
  {
    name: "LoginScreen",
    component: LoginScreen,
  },
  {
    name: "EmailScreen",
    component: EmailScreen,
  },
  {
    name: "EmailPasswordScreen",
    component: EmailPasswordScreen,
  },
  {
    name: "EmailOtpScreen",
    component: EmailOtpScreen,
  },
  {
    name: "PhoneScreen",
    component: PhoneScreen,
  },
  {
    name: "PinScreen",
    component: PinScreen,
  },
  {
    name: "ConfirmPinScreen",
    component: ConfirmPinScreen,
  },
  {
    name: "AccountProtectedScreen",
    component: AccountProtectedScreen,
  },
  {
    name: "PersonalDetailScreen",
    component: PersonalDetailScreen,
  },
  {
    name: "SetPasswordScreen",
    component: SetPasswordScreen,
  },
  {
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    name: "AuthVerificationScreen",
    component: AuthVerificationScreen,
  },
];

export const dashboardStack = [
  {
    name: "HomeScreen",
    component: HomeScreen,
  },
];

export const mergedStacks = [...dashboardStack, ...authStacks];
