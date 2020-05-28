import React from "react";

enum types {
  ON = "ON",
  OFF = "OFF",
}

type IBlankProps = {};

interface IBlankAction {
  type: types;
}

interface IBlankState {
  dispatch: (action: IBlankAction) => void;
  state: IBlankProps;
}

const initialState: IBlankProps = false;

const reducer = (
  state: IBlankProps = initialState,
  action: IBlankAction
): IBlankProps => {
  switch (action.type) {
    case types.ON:
      return true;
    case types.OFF:
      return false;
    default:
      throw new Error("Undefined dispatch action");
  }
};

const BlankContext = React.createContext<IBlankState>({
  dispatch: () => {},
  state: initialState,
});

export const useBlank = (funcName: string) => {
  const context = React.useContext(BlankContext);
  if (context === undefined) {
    throw new Error(`${funcName} must be used within a BlankProvider`);
  }
  return context;
};

const BlankContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <BlankContext.Provider value={{ dispatch, state: state }}>
      {children}
    </BlankContext.Provider>
  );
};

export { types, BlankContextProvider, BlankContext };
