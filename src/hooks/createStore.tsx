import React, {createContext, useReducer, useContext} from 'react';

function createStore<
  S extends object,
  M extends {
    [action: string]: (state: S, payload: any) => void;
  }
>(initial: {
  state: S;
  mutations?: M;
}): {
  useStore: () => {
    get: S;
    commit: <A extends keyof M, P extends Parameters<M[A]>[1]>(
      action: A,
      payload?: P,
    ) => void;
  };
  StoreContainer: React.FC;
} {
  type Response = {
    get: S;
    commit: <A extends keyof M, P extends Parameters<M[A]>[1]>(
      action: A,
      payload?: P,
    ) => void;
  };

  const {state, mutations} = initial;

  const StoreContext = createContext<Response>({
    get: {...state},
    commit: () => {},
  });

  const reducer = (
    currState: S,
    [action, payload]: [
      Parameters<Response['commit']>[0],
      Parameters<Response['commit']>[1],
    ],
  ): S => {
    const nextState = {...currState};
    const {[action]: mutate} = mutations;
    if (typeof mutate !== 'function') {
      throw new Error(`commit wrong action: '${action}'`);
    }
    mutate(nextState, payload);
    return nextState;
  };

  const StoreContainer: React.FC = ({children}) => {
    const [reducerState, reducerDispatch] = useReducer(reducer, state);

    const context = {
      get: reducerState,
      commit: (action: keyof M, payload: Parameters<M[keyof M]>[1]) => {
        reducerDispatch([action, payload]);
      },
    };

    return (
      <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
    );
  };

  const useStore = () => {
    return useContext(StoreContext);
  };
  return {
    useStore,
    StoreContainer,
  };
}

export default createStore;
