import {View, Text} from 'react-native';
import React from 'react';
import NavigationStrings from '../../constants/NavigationStrings';
import TabRoutes from './TabRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Gamification } from '../screens';

export default function () {
    const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Screen name={NavigationStrings.TABS} component={TabRoutes} />
      <Stack.Screen name={NavigationStrings.GAMIFICATION} component={Gamification} />
    </>
  );
}
