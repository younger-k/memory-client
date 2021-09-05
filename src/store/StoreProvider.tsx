import React, { createContext } from 'react';
import ToastStore from "./ToastStore";

interface Iprops {
  children: React.ReactNode;
}

interface StoreContextType {
  toastStore: ToastStore;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useDataStore = (): StoreContextType => {
  const contextStore = React.useContext(StoreContext);
  if (!contextStore) {
    throw new Error('must need provider');
  }
  return contextStore;
};

export const StoreProvider = ({ children }: Iprops): JSX.Element => {
  const stores = {
    toastStore: new ToastStore(),
  };

  return (<StoreContext.Provider value={stores}>{children}</StoreContext.Provider>)
};
