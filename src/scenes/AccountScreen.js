import React from 'react';
import {Image, Platform} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import MyMall from '../scenes/my-mall/MyMall';
import Inspiration from '../scenes/inspiration/InspirationScreen';

import * as colors from '../styles/color';

const Tab = createBottomTabNavigator();

const AccountScreen = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: Platform.OS === 'ios' ? wp(22.8) : wp(15.8),
          backgroundColor: colors.tabBackground,
          borderTopWidth: 0,
          paddingBottom: Platform.OS === 'ios' ? wp(6.6) : wp(0),
        },
      }}
      sceneContainerStyle={{}}>
      <Tab.Screen
        name="My Mall"
        component={MyMall}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/iconMallFilled.png')}
                style={{width: wp(5.4), height: wp(5.8)}}
              />
            ) : (
              <Image
                source={require('../assets/iconMall.png')}
                style={{width: wp(5.4), height: wp(5.8)}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Inspiration"
        component={Inspiration}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/iconInpireFilled.png')}
                style={{width: wp(7.3), height: wp(6.8)}}
              />
            ) : (
              <Image
                source={require('../assets/iconInpire.png')}
                style={{width: wp(7.3), height: wp(6.8)}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Capture"
        component={MyMall}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/clickerGroup.png')}
              style={{
                width: wp(12.8),
                height: wp(12.8),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Store"
        component={MyMall}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/iconStoreFilled.png')}
                style={{width: wp(6.2), height: wp(6)}}
              />
            ) : (
              <Image
                source={require('../assets/iconStore.png')}
                style={{width: wp(6.2), height: wp(6)}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyMall}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/iconAccountFilled.png')}
                style={{width: wp(5.4), height: wp(6)}}
              />
            ) : (
              <Image
                source={require('../assets/iconAccount.png')}
                style={{width: wp(5.4), height: wp(6)}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AccountScreen;
