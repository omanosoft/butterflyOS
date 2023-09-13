import { type DefaultTheme } from "styled-components";
import defaultTheme from "styles/defaultTheme";
import pinkTheme from "styles/pinkTheme";
import turquoiseTheme from "styles/turquoiseTheme";

const themes = { defaultTheme, pinkTheme, turquoiseTheme };

export type ThemeName = keyof typeof themes;

export default themes as Record<ThemeName, DefaultTheme>;
