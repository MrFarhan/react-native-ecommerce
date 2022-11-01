import {View, Text} from 'react-native';
import React from 'react';
import NavigationStrings from '../../constants/NavigationStrings';
import TabRoutes from './TabRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function (Stack) {
  //   const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Screen name={NavigationStrings.TABS} component={TabRoutes} />
    </>
  );
}
