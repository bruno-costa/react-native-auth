import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '@src/screens/Dashboard';

const Stack = createStackNavigator();

const DashboardRoutes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
);
export default DashboardRoutes;
