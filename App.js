import React from 'react';
import {enableLatestRenderer} from 'react-native-maps';

import Routes from './src/Navigation/Routes';
import 'react-native-gesture-handler';

const App = () => {
  enableLatestRenderer();

  return <Routes />;
};

export default App;
