import { useState, createContext, useContext, useMemo } from "react";

const DrawerContext = createContext();

export default function DrawerContextProvider({ children }) {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const initialValue = useMemo(
    () => ({
      isDrawerActive,
      setIsDrawerActive,
    }),
    [isDrawerActive]
  );

  return (
    <DrawerContext.Provider value={initialValue}>
      {children}
    </DrawerContext.Provider>
  );
}

export function drawerCtxProvider() {
  const context = useContext(DrawerContext);

  return context;
}
