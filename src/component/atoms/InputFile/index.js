import React from "react";
import { useStyles } from "./styles";
// import UploadIcon from "@mui/icons-material/UploadFileOutlined";

const InputFile = ({ label, filename, onChange, desc, disabled = false }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <p>{desc}</p>
      <label className={classes.containerFile}>
        <label className={classes.customFile}>
          <input disabled={disabled} type="file" onChange={onChange} />
          {label}
        </label>
        <p>{filename}</p>
      </label>
    </div>
  );
};

export default InputFile;
