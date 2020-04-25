import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from '@/navigations/Routes';

const App: React.FC = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

export default App;
