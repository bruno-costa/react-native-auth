import createStore from '@/hooks/createStore';

interface AuthState {
  signed: boolean;
  token: string | null;
  user: {
    name: string;
    email: string;
  };
}

const AuthStore = createStore(
  {
    signed: false,
    token: null,
    user: {},
  } as AuthState,
  {
    signIn(state, payload: {token: string; name: string; email: string}) {
      state.signed = true;
      state.token = payload.token;
      state.user.name = payload.name;
      state.user.email = payload.email;
    },
    signOut(state) {
      state.signed = false;
      state.token = null;
    },
  },
);

export default AuthStore;
