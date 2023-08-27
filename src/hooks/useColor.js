import { useContext } from "react";
import NightmodeContext from "../context/nightmodeContext";

const useColor = () => {
  const BRAND_COLOR = process.env.REACT_APP_BRAND_COLOR;
  const DARK_COLOR = process.env.REACT_APP_DARK_COLOR;
  const BLACK_COLOR = process.env.REACT_APP_BLACK_COLOR;
  const LIGHT_COLOR = process.env.REACT_APP_LIGHT_COLOR;
  const WHITE_COLOR = process.env.REACT_APP_WHITE_COLOR;
  const { nightmode } = useContext(NightmodeContext);
  if (nightmode) {
    return {
      BRAND_COLOR,
      PRIMARY_COLOR_LIGHT: DARK_COLOR,
      PRIMARY_COLOR_DARK: BLACK_COLOR,
      SECONDARY_COLOR_LIGHT: LIGHT_COLOR,
      SECONDARY_COLOR_DARK: WHITE_COLOR,
    };
  } else {
    return {
      BRAND_COLOR,
      PRIMARY_COLOR_LIGHT: LIGHT_COLOR,
      PRIMARY_COLOR_DARK: WHITE_COLOR,
      SECONDARY_COLOR_LIGHT: DARK_COLOR,
      SECONDARY_COLOR_DARK: BLACK_COLOR,
    };
  }
};

export default useColor;
