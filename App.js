import React from 'react';
import {enableLatestRenderer} from 'react-native-maps';
import AppRootRouter from './src/Navigation/AppRootRouter';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const App = () => {
  enableLatestRenderer();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="rgb(50,50,50)" />
      <AppRootRouter />
    </NavigationContainer>
  );
};

export default App;
