import { deepOrange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const AIRBNB_COLOR = "#FF5A5F";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: AIRBNB_COLOR,
    },
  },
});
