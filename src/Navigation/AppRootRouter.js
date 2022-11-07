import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './TabRoutes';

export default function AppRootRouter() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={'MainRoutes'}
      screenOptions={{
        headerShown: false,
      }}>
      {/* {Splash and other login screen will go below} */}
      <Stack.Screen name="MainRoutes" component={TabRoutes} />
    </Stack.Navigator>
  );
}
