import React from "react";
import { TextField } from "@mui/material";

export default function InputField({
  id,
  variant, //outlined,contained,text
  color, //primary,secondary,success,error,info,warning,string
  disabled,
  label,
  error,
  helperText,
  required,
  value,
  width,
  marginTop,
  marginLeft,
  marginRight,
  inputProps,
  onChange,
  fullWidth,
  type,
}) {
  const sx = {
    width,
    marginTop,
    marginLeft,
    marginRight,
  };

  return (
    <TextField
      id={id}
      variant={variant}
      color={color}
      label={label}
      error={error}
      helperText={helperText}
      required={required}
      value={value}
      sx={sx}
      disabled={disabled}
      inputProps={inputProps}
      fullWidth={fullWidth}
      type={type}
      onChange={onChange}
    />
  );
}

InputField.propTypes = {};

InputField.defaultProps = {};
