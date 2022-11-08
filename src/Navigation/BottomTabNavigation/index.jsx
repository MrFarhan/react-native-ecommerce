import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationStrings from '../../constants/NavigationStrings';
import colors from '../../constants/colors';
import { Alerts, Brands, Gamification, Home, Wallet } from '../../screens';
import imagePath from '../../constants/imagePath';

const BottomTabNavigation = () => {
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
          tabBarStyle: {display: 'none'},
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
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
