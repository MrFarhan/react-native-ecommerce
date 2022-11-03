import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AllDeals,
  Categories,
  Gamification,
  Home,
  MyReviews,
  Profile,
  Settings,
  Wishlist,
} from '../screens';
import NavigationStrings from '../../constants/NavigationStrings';
import Navigation from './Navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './TabRoutes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
// import { createDrawerNavigator } from '@react-navigation/drawer';

export default function Routes() {
  // const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        defaultScreenOptions={{drawerType: 'front', headerShown: false}}
        initialRouteName={NavigationStrings.TABS}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name={NavigationStrings.HOME}
          component={TabRoutes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.ALL_DEALS}
          component={AllDeals}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.CATEGORIES}
          component={Categories}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.WISHLIST}
          component={Wishlist}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.MY_REVIEWS}
          component={MyReviews}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationStrings.SETTINGS}
          component={Settings}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
