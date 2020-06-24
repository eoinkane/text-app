import React, { useEffect } from "react";
import { useLoading } from "./../LoadingContext";
import User, { CreatePayload, CreateError } from "../../models/User";

export type CurrentUserT = User | null;

interface ICurrentUserContext {
  currentUser: CurrentUserT;
  initUser: (payload: CreatePayload) => Promise<void>;
  error: boolean;
}

interface ICurrentUserProviderProps {
  initialCurrentUserProp?: CurrentUserT;
}

export const initialCurrentUser: CurrentUserT = null;

const CurrentUserContext = React.createContext<ICurrentUserContext>({
  currentUser: initialCurrentUser,
  initUser: (payload) => {
    return Promise.resolve();
  },
  error: false,
});

export const useCurrentUser = (funcName: string) => {
  const context = React.useContext(CurrentUserContext);
  if (context === undefined) {
    throw new Error(`${funcName} must be used within a CurrentUserProvider`);
  }
  return context;
};

const CurrentUserProvider: React.FC<ICurrentUserProviderProps> = ({
  children,
  initialCurrentUserProp,
}) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>(
    initialCurrentUserProp ? initialCurrentUserProp : initialCurrentUser
  );
  const [error, setError] = React.useState(false);
  const { loadingActions } = useLoading("CurrentUserProvider");

  const initUser = async (payload: CreatePayload) => {
    loadingActions.ON();
    try {
      const createdUser = await User.create(payload);
      setCurrentUser(createdUser);
      loadingActions.OFF();
      return Promise.resolve();
    } catch (error) {
      if (error instanceof CreateError) {
        setError(true);
      }
      loadingActions.OFF();
      return Promise.reject();
    }
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser: currentUser, initUser: initUser, error: error }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserProvider, CurrentUserContext };
