import { useContext } from "react";
import { GlobalContext } from "../../context/global";
import * as Styles from "./styles";

const HomePage = () => {
  const { dataMentor, dataMentee } = useContext(GlobalContext);

  return (
    <Styles.Container>
      <p>Welcome {dataMentor.firstName || dataMentee.firstName}</p>
    </Styles.Container>
  );
};

export default HomePage;
