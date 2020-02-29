import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';

import MainTabNavigator from './MainTabNavigator';
import {Platform} from 'react-native';

const config = Platform.select ({
  default: {},
});

const RootStack = createStackNavigator (
  {
    Login: LoginScreen,
    Home: MainTabNavigator,
    Register: SignUpScreen,
  },
  config,
  {
    initialRouteName: 'Login',
  }
);

export default RootStack;
