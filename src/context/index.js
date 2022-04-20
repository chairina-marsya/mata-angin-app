import React from "react";

import GlobalProvider from "./global";

const ContextProvider = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};
export default ContextProvider;
