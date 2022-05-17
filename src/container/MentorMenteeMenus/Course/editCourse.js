// import { useContext } from "react";
// import { GlobalContext } from "../../context/global";

import { useHistory } from "react-router-dom";
import GeneralForm from "../../../component/templates/GeneralForm";
import { FormElement } from "./formElement";

const EditCourse = () => {
  const history = useHistory();

  return (
    <GeneralForm
    onClickButtonProceed={() => history.push('/course-mentor')}
    inputData={FormElement}
    formTitle='Edit Course'
    buttonTitle='Save Course'
    />
  );
};

export default EditCourse;