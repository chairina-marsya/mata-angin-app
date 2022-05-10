import React, { useState } from "react";
import { initialRegMentee, initialRegMentor } from "../helpers/data";

export const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [dataMentor, setDataMentor] = useState(initialRegMentee);
  const [dataMentee, setDataMentee] = useState(initialRegMentor);

  const globalState = {
    dataMentor,
    setDataMentor,
    dataMentee,
    setDataMentee,
  };

  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
