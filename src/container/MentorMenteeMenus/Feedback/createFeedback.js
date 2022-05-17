// import { useContext } from "react";
// import { GlobalContext } from "../../context/global";

import { useHistory } from "react-router-dom";
import GeneralForm from "../../../component/templates/GeneralForm";
import { FormElement } from "./formElement";

const CreateFeedback = () => {
  const history = useHistory();

  return (
    <GeneralForm
      onClickButtonProceed={() => history.push('/feedback')}
      inputData={FormElement}
      formTitle='Create Feedback'
      buttonTitle='Create Feedback'
    />
  );
};

export default CreateFeedback;