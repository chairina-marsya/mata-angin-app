import React, { useContext } from "react";
import ButtonAtom from "../../../component/atoms/Button";
import Text from "../../../component/atoms/Text";
import InputField from "../../../component/atoms/TextField";
import * as Styles from "./styles";
import { useHistory } from "react-router-dom";
import * as Color from "../../../helpers/colors";
import { GlobalContext } from "../../../context/global";

const RegisterMentee = () => {
  const history = useHistory();
  const { dataMentee, setDataMentee } = useContext(GlobalContext);

  const handleButton = () => {
    history.push("/homepage");
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
              value={dataMentee.firstName}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, firstName: e.target.value })
              }
            />
            <InputField
              marginLeft={2}
              fullWidth
              label="Last Name"
              value={dataMentee.lastName}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, lastName: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="Email"
              value={dataMentee.email}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, email: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="50%">
            <InputField
              marginRight={1}
              fullWidth
              label="Password"
              type="password"
              value={dataMentee.password}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, password: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="50%">
            <InputField
              marginRight={1}
              fullWidth
              label="Confirm Password"
              type="password"
              value={dataMentee.confirmPassword}
              onChange={(e) =>
                setDataMentee({
                  ...dataMentee,
                  confirmPassword: e.target.value,
                })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="Address"
              value={dataMentee.address}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, address: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="50%">
            <InputField
              marginRight={1}
              fullWidth
              label="Gender"
              value={dataMentee.gender}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, gender: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="Education"
              value={dataMentee.education}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, education: e.target.value })
              }
            />
            <InputField
              marginLeft={2}
              fullWidth
              label="Graduation Year"
              value={dataMentee.graduationYear}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, graduationYear: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="Major"
              value={dataMentee.major}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, major: e.target.value })
              }
            />
            <InputField
              marginLeft={2}
              fullWidth
              label="University"
              value={dataMentee.university}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, university: e.target.value })
              }
            />
          </Styles.FormHorizontal>
          <Styles.FormHorizontal widthContainer="100%">
            <InputField
              fullWidth
              label="Motivation"
              value={dataMentee.motivation}
              onChange={(e) =>
                setDataMentee({ ...dataMentee, motivation: e.target.value })
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

export default RegisterMentee;
