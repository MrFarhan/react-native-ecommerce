import React from 'react';
import BottomTabNavigation from './BottomTabNavigation/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';

export default function TabRoutes() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      defaultScreenOptions={{drawerType: 'front', headerShown: false}}
      initialRouteName={'HomeScreen'}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={'HomeScreen'}
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
