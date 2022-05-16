import { useContext } from "react";
import { GlobalContext } from "../../context/global";
import * as Styles from "./styles";

const HomePage = () => {
  const { dataMentor, dataMentee, loginInfo } = useContext(GlobalContext);

  return (
    <div/>
  );
};

export default HomePage;
