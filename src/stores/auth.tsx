import AsyncStorage from '@react-native-community/async-storage';

import createStore from '@/hooks/createStore';
import ApiService from '@/services/api';

interface AuthState {
  signed: boolean;
  token: string | null;
  user: {
    name: string;
    email: string;
  };
}

const AuthStore = createStore({
  state: {
    signed: false,
    token: null,
    user: {},
  } as AuthState,

  mutations: {
    signIn(state, payload: {token: string; name: string; email: string}) {
      state.signed = true;
      state.token = payload.token;
      state.user.name = payload.name;
      state.user.email = payload.email;

      AsyncStorage.setItem(
        '$authState',
        JSON.stringify({
          ...payload,
        }),
      );

      ApiService.setCredentialsKey(payload.token);
    },

    signOut(state) {
      state.signed = false;
      state.token = null;
      AsyncStorage.removeItem('$authState');
    },
  },
});

export default AuthStore;
