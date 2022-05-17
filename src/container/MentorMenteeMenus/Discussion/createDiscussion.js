// import { useContext } from "react";
// import { GlobalContext } from "../../context/global";

import { useHistory } from "react-router-dom";
import GeneralForm from "../../../component/templates/GeneralForm";
import { FormElement } from "./formElement";

const CreateDiscussion = () => {
  const history = useHistory();

  return (
    <GeneralForm
    onClickButtonProceed={() => history.push('/discussion')}
    inputData={FormElement}
    formTitle='Create Discussion'
    buttonTitle='Create Discussion'
    />
  );
};

export default CreateDiscussion;