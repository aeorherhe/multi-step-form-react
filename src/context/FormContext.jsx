/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useReducer } from "react";
import { createContext } from "react";
import { reducer, initialState } from "./reducer";

const FormContext = createContext();

// context provider
export const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;

// custom hook
export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
}
