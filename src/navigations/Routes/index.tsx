import React from 'react';

import AuthStack from '@/navigations/Routes/AuthStack';
import DashboardStack from '@/navigations/Routes/DashboardStack';
import AuthStore from '@/stores/auth';
const Routes: React.FC = () => {
  const authStore = AuthStore.useStore();
  return authStore.get.signed ? <DashboardStack /> : <AuthStack />;
};

export default Routes;
