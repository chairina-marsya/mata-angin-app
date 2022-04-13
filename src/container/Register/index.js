import React, { useState } from "react";
import ButtonAtom from "../../component/atoms/Button";
import Text from "../../component/atoms/Text";
import InputField from "../../component/atoms/TextField";
import { initialReg } from "../../helpers/data";
import * as Styles from "./styles";
import { useHistory } from "react-router-dom";
import * as Color from "../../helpers/colors"

const Register = () => {
  const history = useHistory();
  const [dataReg, setDataReg] = useState(initialReg);

  const handleButton = () => {
    console.log(dataReg);
    history.push("/");
  };

  return (
    <Styles.Container>
      <Styles.ContainerLeft>
        <Text weight="600" size="xxl" color={Color.darkGrey} textAlign="center">
          Create your Mata Angin account
        </Text>
        <Styles.Form>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="First Name"
              value={dataReg.firstName}
              onChange={(e) =>
                setDataReg({ ...dataReg, firstName: e.target.value })
              }
            />
            <InputField
              marginLeft={2}
              fullWidth
              label="Last Name"
              value={dataReg.lastName}
              onChange={(e) =>
                setDataReg({ ...dataReg, lastName: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="Email"
              value={dataReg.email}
              onChange={(e) =>
                setDataReg({ ...dataReg, email: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="50%">
            <InputField
              marginRight={1}
              fullWidth
              label="Password"
              type="password"
              value={dataReg.password}
              onChange={(e) =>
                setDataReg({ ...dataReg, password: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="50%">
            <InputField
              marginRight={1}
              fullWidth
              label="Confirm Password"
              type="password"
              value={dataReg.confirmPassword}
              onChange={(e) =>
                setDataReg({ ...dataReg, confirmPassword: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="Address"
              value={dataReg.address}
              onChange={(e) =>
                setDataReg({ ...dataReg, address: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="50%">
            <InputField
              marginRight={1}
              fullWidth
              label="Gender"
              value={dataReg.gender}
              onChange={(e) =>
                setDataReg({ ...dataReg, gender: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="Education"
              value={dataReg.education}
              onChange={(e) =>
                setDataReg({ ...dataReg, education: e.target.value })
              }
            />
            <InputField
              marginLeft={2}
              fullWidth
              label="Graduation Year"
              value={dataReg.graduationYear}
              onChange={(e) =>
                setDataReg({ ...dataReg, graduationYear: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="Major"
              value={dataReg.major}
              onChange={(e) =>
                setDataReg({ ...dataReg, major: e.target.value })
              }
            />
            <InputField
              marginLeft={2}
              fullWidth
              label="University"
              value={dataReg.university}
              onChange={(e) =>
                setDataReg({ ...dataReg, university: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="Motivation"
              value={dataReg.motivation}
              onChange={(e) =>
                setDataReg({ ...dataReg, motivation: e.target.value })
              }
            />
          </Styles.FormHorizontal>
        </Styles.Form>
        <ButtonAtom
          onClick={handleButton}
          fullWidth
          buttonText="Submit"
          variant="contained"
        ></ButtonAtom>
      </Styles.ContainerLeft>
      <Styles.ContainerRight></Styles.ContainerRight>
    </Styles.Container>
  );
};

export default Register;
