import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from '@/navigations/Routes';
import AuthStore from '@/stores/auth';

const App: React.FC = () => (
  <AuthStore.StoreContainer>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </AuthStore.StoreContainer>
);

export default App;
