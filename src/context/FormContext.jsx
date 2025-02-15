/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const formContext = createContext();

function FormHandleProvider({ children }) {
  const [showForm, setShowForm] = useState(false);
  const [editAddress, setEditAddress] = useState(null);
  const [saveValue, setSaveValue] = useState(null);

  return (
    <formContext.Provider
      value={{
        showForm,
        setShowForm,
        editAddress,
        setEditAddress,
        saveValue,
        setSaveValue,
      }}
    >
      {children}
    </formContext.Provider>
  );
}

function useForm() {
  const context = useContext(formContext);
  return context;
}

export { FormHandleProvider, useForm };
