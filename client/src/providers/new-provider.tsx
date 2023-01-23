/* eslint-disable @typescript-eslint/no-empty-function */
import { Action, initialState, reducer, State } from '@/state/reducers/app-reducer';
import { createContext, FC, PropsWithChildren, Reducer, useReducer } from 'react';

const AppContext = createContext<[State, React.Dispatch<Action>]>([initialState, () => {}]);

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer as Reducer<State, Action>, initialState);

  return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
