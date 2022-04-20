import { useContext, useState } from "react";
import InputFile from "../../../component/atoms/InputFile";
import InputField from "../../../component/atoms/TextField";
import * as Styles from "./styles";
import { useHistory } from "react-router-dom";
import ButtonAtom from "../../../component/atoms/Button";
import Text from "../../../component/atoms/Text";
import { darkGrey } from "../../../helpers/colors";
import { GlobalContext } from "../../../context/global";

const RegisterMentor = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState({});
  const { dataMentor, setDataMentor } = useContext(GlobalContext);

  const handleSelected = (e) => {
    if (selectedFile?.name) {
      setSelectedFile({});
    } else {
      setSelectedFile(e?.target?.files[0]);
    }
  };

  const handleButton = () => {
    history.push("/homepage");
  };

  return (
    <Styles.Container>
      <Styles.ContainerLeft>
        <Styles.ContainerBox />
      </Styles.ContainerLeft>
      <Styles.ContainerRight>
        <Styles.ContainerForm>
          <Text weight="800" size="10" color={darkGrey} textAlign="center">
            Apply as a Mentor
          </Text>
          <Styles.Form>
            <Styles.FormHorizontal dir="col" widthContainer="48%">
              <Styles.FormHorizontal widthContainer="100%">
                <InputField
                  fullWidth
                  label="First Name"
                  value={dataMentor.firstName}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, firstName: e.target.value })
                  }
                />
                <InputField
                  marginLeft={2}
                  fullWidth
                  label="Last Name"
                  value={dataMentor.lastName}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, lastName: e.target.value })
                  }
                />
              </Styles.FormHorizontal>
              <Styles.FormHorizontal widthContainer="100%">
                <InputField
                  fullWidth
                  label="Email"
                  value={dataMentor.email}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, email: e.target.value })
                  }
                />
              </Styles.FormHorizontal>
              <Styles.FormHorizontal widthContainer="50%">
                <InputField
                  marginRight={1}
                  fullWidth
                  label="Password"
                  type="password"
                  value={dataMentor.password}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, password: e.target.value })
                  }
                />
              </Styles.FormHorizontal>
              <Styles.FormHorizontal widthContainer="50%">
                <InputField
                  marginRight={1}
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  value={dataMentor.confirmPassword}
                  onChange={(e) =>
                    setDataMentor({
                      ...dataMentor,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </Styles.FormHorizontal>
              <Styles.FormHorizontal widthContainer="100%">
                <InputField
                  fullWidth
                  label="Address"
                  value={dataMentor.address}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, address: e.target.value })
                  }
                />
              </Styles.FormHorizontal>
              <Styles.FormHorizontal widthContainer="50%">
                <InputField
                  marginRight={1}
                  fullWidth
                  label="Gender"
                  value={dataMentor.gender}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, gender: e.target.value })
                  }
                />
              </Styles.FormHorizontal>
              <Styles.FormHorizontal widthContainer="100%">
                <InputField
                  fullWidth
                  label="Education"
                  value={dataMentor.education}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, education: e.target.value })
                  }
                />
                <InputField
                  marginLeft={2}
                  fullWidth
                  label="Graduation Year"
                  value={dataMentor.graduationYear}
                  onChange={(e) =>
                    setDataMentor({
                      ...dataMentor,
                      graduationYear: e.target.value,
                    })
                  }
                />
              </Styles.FormHorizontal>
              <Styles.FormHorizontal widthContainer="100%">
                <InputField
                  fullWidth
                  label="Major"
                  value={dataMentor.major}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, major: e.target.value })
                  }
                />
                <InputField
                  marginLeft={2}
                  fullWidth
                  label="University"
                  value={dataMentor.university}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, university: e.target.value })
                  }
                />
              </Styles.FormHorizontal>
            </Styles.FormHorizontal>
            <Styles.FormHorizontal dir="col" widthContainer="48%">
              <Styles.FormHorizontal widthContainer="100%">
                <InputField
                  fullWidth
                  label="Experience"
                  value={dataMentor.exp}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, exp: e.target.value })
                  }
                />
              </Styles.FormHorizontal>
              <Styles.FormHorizontal widthContainer="100%">
                <InputField
                  fullWidth
                  label="Skill"
                  value={dataMentor.skill}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, skill: e.target.value })
                  }
                />
              </Styles.FormHorizontal>
              <Styles.FormHorizontal widthContainer="100%">
                <InputField
                  fullWidth
                  label="Motivagion"
                  value={dataMentor.motivation}
                  onChange={(e) =>
                    setDataMentor({ ...dataMentor, motivation: e.target.value })
                  }
                />
              </Styles.FormHorizontal>
              <Styles.ContainerFile>
                <InputFile
                  label="Chose File"
                  desc="Upload your CV Maximum size : 200MB, maximum attachments: 1"
                  filename={selectedFile.name || "No file chosen"}
                  onChange={handleSelected}
                />
              </Styles.ContainerFile>
              <ButtonAtom
                onClick={handleButton}
                fullWidth
                buttonText="Submit"
                variant="contained"
              ></ButtonAtom>
            </Styles.FormHorizontal>
          </Styles.Form>
        </Styles.ContainerForm>
      </Styles.ContainerRight>
    </Styles.Container>
  );
};

export default RegisterMentor;
