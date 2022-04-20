import { makeStyles } from "@mui/styles";
import { blue, white } from "../../../helpers/colors";
export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "& p": {
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
  customFile: {
    "& input": {
      display: "none",
    },
    "&:hover, &:focus ": {
      backgroundColor: `${blue}`,
      color: `${white}`,
    },
    backgroundColor: `${blue}`,
    color: `${white}`,
    boxShadow: "unset",
    borderRadius: "6px",
    height: "18px",
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "capitalize",
    cursor: "pointer",
    padding: "8px",
    display: "flex",
    alignItems: "center",
  },
  containerFile: {
    display: "flex",
    alignItems: "center",
    "& p": {
      marginLeft: "8px",
      fontSize: "13px",
      fontWeight: 400,
    },
  },
});
