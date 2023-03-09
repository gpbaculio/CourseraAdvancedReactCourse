import { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

export type AlertContextType = {
  isOpen: boolean;
  // Type can be either "success" or "error"
  type: string;
  // Message to be displayed, can be any string
  message: string;
  onOpen: (type: string, message: string) => void;
  onClose: () => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

type AlertProviderProps = {
  children: ReactNode;
};
export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: "success",
    // Message to be displayed, can be any string
    message: "",
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: "", message: "" }),
      }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
