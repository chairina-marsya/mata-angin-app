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
    btncolor,
    bordercolor,
    disabled,
    onClick,
    buttonText,
    fullWidth,
}) {

const sx = {
    width: width || 'auto',
    height: height || 'auto',
    fontSize: fontSize || 'auto',
    color,
    backgroundColor: btncolor,
    border: `1px solid ${bordercolor}`,
    '&:hover': {
        color,
        backgroundColor: btncolor,
      border: `1px solid ${bordercolor}`,
    },
}

  return (
    <Button
    id={id}
    variant={variant}
    startIcon={startIcon}
    endIcon={endIcon}
    sx={sx}
    disabled={disabled}
    onClick={() => onClick(id)}
    fullWidth={fullWidth}
    >
      {buttonText}
    </Button>
  );
}
