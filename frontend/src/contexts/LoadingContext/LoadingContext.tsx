import React from "react";

enum types {
  ON = "ON",
  OFF = "OFF",
}

export interface ILoadingActions {
  ON: () => void;
  OFF: () => void;
}

type ILoading = boolean;

interface ILoadingAction {
  type: types;
}

interface ILoadingState {
  loadingActions: ILoadingActions;
  loading: ILoading;
}

const initialLoading: ILoading = false;

export const reducer = (
  state: ILoading = initialLoading,
  action: ILoadingAction
): ILoading => {
  switch (action.type) {
    case types.ON:
      return true;
    case types.OFF:
      return false;
    default:
      throw new Error("Undefined dispatch action");
  }
};

const LoadingContext = React.createContext<ILoadingState>({
  loadingActions: { ON: () => {}, OFF: () => {} },
  loading: initialLoading,
});

export const useLoading = (funcName: string) => {
  const context = React.useContext(LoadingContext);
  if (context === undefined) {
    throw new Error(`${funcName} must be used within a LoadingProvider`);
  }
  return context;
};

const createActions = (dispatch: React.Dispatch<ILoadingAction>) => {
  return {
    OFF: () => dispatch({ type: types.OFF }),
    ON: () => dispatch({ type: types.ON }),
  };
};

const LoadingContextProvider: React.FC = ({ children }) => {
  const [loading, dispatch] = React.useReducer(reducer, initialLoading);
  const loadingActions: ILoadingActions = createActions(dispatch);

  return (
    <LoadingContext.Provider value={{ loadingActions, loading: loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { types, LoadingContextProvider, LoadingContext };
