import React, {createContext, useMemo, useReducer, useContext} from 'react';

function createStore<
  S extends object,
  M extends {
    [action: string]: (state: S, payload: any) => void;
  }
>(
  state: S,
  mutations: M,
): {
  useStore: () => {
    get: S;
    commit: <A extends keyof M, P extends Parameters<M[A]>[1]>(
      action: A,
      payload?: P,
    ) => void;
  };
  StoreContainer: React.FC;
} {
  const StoreContext = createContext<{
    get: S;
    commit: <A extends keyof M, P extends Parameters<M[A]>[1]>(
      action: A,
      payload?: P,
    ) => void;
  }>({
    get: {...state},
    commit: () => {},
  });

  const reducer = (
    currState: S,
    [action, payload]: [keyof M, Parameters<M[keyof M]>[1]],
  ): S => {
    const nextState = {...currState};
    const {[action]: mutate} = mutations;
    if (typeof mutate !== 'function') {
      throw new Error(`commit wrong action: '${action}'`);
    }
    mutate(nextState, payload);
    return nextState;
  };

  const ProvideComponent: React.FC = ({children}) => {
    const [reducerState, reducerDispatch] = useReducer(reducer, state);
    const context = {
      get: reducerState,
      commit: (action: keyof M, payload: Parameters<M[keyof M]>[1]) => {
        reducerDispatch([action, payload]);
      },
    };
    const value = useMemo(() => context, [context]);
    return (
      <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
  };

  const useStore = () => {
    return useContext(StoreContext);
  };
  return {
    useStore,
    StoreContainer: ProvideComponent,
  };
}

export default createStore;
