import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './src/store/reducers/userReducer';

import 'react-native-gesture-handler';
import NavigationBar from 'react-native-navbar-color';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';

import * as colors from './src/styles/color';
import { setTopLevelNavigator } from './src/navigations/NavigationService';
import SignInScreen from './src/scenes/profile/SignInScreen';
import SignUpScreen from './src/scenes/profile/SignUpScreen';
import IntroScreen from './src/scenes/profile/IntroScreen';
import ClickerIdSetupScreen from './src/scenes/profile/ClickerIdSetupScreen';
import ProfilePhotoSetupScreen from './src/scenes/profile/ProfilePhotoSetupScreen';
import ForgotPasswordScreen from './src/scenes/profile/ForgotPasswordScreen';
import OtpVerificationScreen from './src/scenes/profile/OtpVerificationScreen';
import ResetPasswordScreen from './src/scenes/profile/ResetPasswordScreen';
import AccountScreen from './src/scenes/AccountScreen';
import ProductScreen from './src/scenes/product-page/ProductScreen';

const Stack = createStackNavigator();

const store = createStore(
  combineReducers({ user: UserReducer }),
  compose(applyMiddleware(thunk)),
);

const App: () => React$Node = () => {
  NavigationBar.setColor(colors.tabBackground);
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      <NavigationContainer
        ref={(navigatorRef) => {
          setTopLevelNavigator(navigatorRef);
        }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            //gestureEnabled: false,
            //gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
          }}
          initialRouteName="Product Page">
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="Sign In" component={SignInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
          <Stack.Screen name="Clicker Id" component={ClickerIdSetupScreen} />
          <Stack.Screen name="Product Page" component={ProductScreen} />
          <Stack.Screen
            name="OTP Verification"
            component={OtpVerificationScreen}
          />
          <Stack.Screen
            name="Profile Photo"
            component={ProfilePhotoSetupScreen}
          />
          <Stack.Screen
            name="Forgot Password"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
