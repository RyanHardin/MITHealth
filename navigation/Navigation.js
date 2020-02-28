import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import LoginScreen from '../screens/Login';

import MainTabNavigator from './MainTabNavigator';

const RootStack = createStackNavigator (
  {
    Login: LoginScreen,
    Home: MainTabNavigator,
  },
  {
    initialRouteName: 'Login',
  }
);

export default RootStack;
