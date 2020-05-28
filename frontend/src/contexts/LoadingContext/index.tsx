import React from "react";

enum types {
  ON = "ON",
  OFF = "OFF",
}

type ILoading = boolean;

interface ILoadingAction {
  type: types;
}

interface ILoadingState {
  dispatch: (action: ILoadingAction) => void;
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
  dispatch: () => {},
  loading: initialLoading,
});

export const useLoading = (funcName: string) => {
  const context = React.useContext(LoadingContext);
  if (context === undefined) {
    throw new Error(`${funcName} must be used within a LoadingProvider`);
  }
  return context;
};

const LoadingContextProvider: React.FC = ({ children }) => {
  const [loading, dispatch] = React.useReducer(reducer, initialLoading);

  return (
    <LoadingContext.Provider value={{ dispatch, loading: loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { types, LoadingContextProvider, LoadingContext };
