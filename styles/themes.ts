import { type DefaultTheme } from "styled-components";
import defaultTheme from "styles/defaultTheme";
import lightTheme from "styles/themes/lightTheme";
import blueTheme from "styles/themes/blueTheme";
import greenTheme from "styles/themes/greenTheme";
import pinkTheme from "styles/themes/pinkTheme";
import lightPinkTheme from "styles/themes/lightPinkTheme";

const themes = {
  blueTheme,
  defaultTheme,
  greenTheme,
  lightPinkTheme,
  lightTheme,
  pinkTheme,
};

export type ThemeName = keyof typeof themes;

export default themes as Record<ThemeName, DefaultTheme>;
