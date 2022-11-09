import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoutes from './TabRoutes';
import {Categories, MyReviews, Settings, Wishlist} from 'src/screens/index';
import NavigationStrings from 'src/constants/NavigationStrings';
import TOS from 'src/screens/TOS/index';
import PrivacyPolicy from 'src/screens/PrivacyPolicy/index';

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
      <Stack.Screen
        name={NavigationStrings.CATEGORIES}
        component={Categories}
      />
      <Stack.Screen name={NavigationStrings.WISHLIST} component={Wishlist} />
      <Stack.Screen name={NavigationStrings.MY_REVIEWS} component={MyReviews} />
      <Stack.Screen name={NavigationStrings.SETTINGS} component={Settings} />
      <Stack.Screen name={NavigationStrings.TOS} component={TOS} />
      <Stack.Screen
        name={NavigationStrings.PRIVACY_POLICY}
        component={PrivacyPolicy}
      />
    </Stack.Navigator>
  );
}
