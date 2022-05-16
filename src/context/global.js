import React, { useState } from "react";
import {
  initialRegMentee,
  initialRegMentor,
  userLoginInfo,
} from "../helpers/data";

export const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [dataMentor, setDataMentor] = useState(initialRegMentee);
  const [dataMentee, setDataMentee] = useState(initialRegMentor);
  const [loginInfo, setLoginInfo] = useState(userLoginInfo);

  const globalState = {
    dataMentor,
    setDataMentor,
    dataMentee,
    setDataMentee,
    loginInfo,
    setLoginInfo,
  };

  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
