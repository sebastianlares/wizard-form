import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [redirect, setRedirect] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        count,
        setCount,
        loading,
        setLoading,
        isSubmitting,
        setIsSubmitting,
        redirect,
        setRedirect,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
