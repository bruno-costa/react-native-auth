import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '@/screens/SignIn';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);
export default AuthRoutes;
