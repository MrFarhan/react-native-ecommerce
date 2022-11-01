import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Alerts, Brands, Gamification, Home, Wallet} from '../screens';
import NavigationStrings from '../../constants/NavigationStrings';
import {Image} from 'react-native';
import imagePath from '../../constants/imagePath';
import colors from '../../constants/colors';

export default function TabRoutes() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={NavigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primaryBlue,
        tabBarStyle: {
          backgroundColor: '#EFF0F0',
          borderRadius: 29,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        },
      }}>
      <Tab.Screen
        name={NavigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? colors.primaryBlue : 'gray'}}
                source={imagePath.icHome}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.BRANDS}
        component={Brands}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? colors.primaryBlue : 'gray'}}
                source={imagePath.icBrands}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.GAMIFICATION}
        component={Gamification}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? colors.primaryBlue : 'gray'}}
                source={imagePath.icGamification}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.WALLET}
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? colors.primaryBlue : 'gray'}}
                source={imagePath.icWallet}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={NavigationStrings.ALERTS}
        component={Alerts}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{tintColor: focused ? colors.primaryBlue : 'gray'}}
                source={imagePath.icAlerts}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
