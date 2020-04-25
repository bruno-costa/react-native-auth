import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '@/screens/Dashboard';

const Stack = createStackNavigator();

const DashboardStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
);
export default DashboardStack;
