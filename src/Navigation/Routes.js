import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile} from '../screens';
import NavigationStrings from '../../constants/NavigationStrings';
import Navigation from './Navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Routes() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {Navigation(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
