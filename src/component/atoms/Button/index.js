import React from "react";
import Button from "@mui/material/Button";

export default function ButtonAtom({
  id,
  variant, //outlined,contained,text
  color, //primary,secondary,success,error,info,warning,string
  startIcon,
  endIcon,
  width,
  height,
  fontSize,
  disabled,
  onClick,
  buttonText,
  fullWidth,
}) {
  const sx = {
    width,
    height,
    fontSize,
  };

  return (
    <Button
      id={id}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={sx}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {buttonText}
    </Button>
  );
}
