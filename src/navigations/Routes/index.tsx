import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import AuthStack from '@/navigations/Routes/AuthStack';
import DashboardStack from '@/navigations/Routes/DashboardStack';
import AuthStore from '@/stores/auth';
import useState from '@/hooks/useState';
import Loading from '@/screens/Loading';

const Routes: React.FC = () => {
  const authStore = AuthStore.useStore();

  const loadedStoragedData = useState(false);

  useEffect(() => {
    const load = async () => {
      const json = await AsyncStorage.getItem('$authState');
      loadedStoragedData.set(true);
      if (!json) {
        return;
      }
      const payload = JSON.parse(json);
      if (payload) {
        authStore.commit('signIn', payload);
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loadedStoragedData.value) {
    return <Loading />;
  }

  return authStore.get.signed ? <DashboardStack /> : <AuthStack />;
};

export default Routes;
