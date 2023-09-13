const colors = {
  background: "rgba(58, 38, 53, 1)",
  fileEntry: {
    background: "rgba(85, 62, 77, 1)",
    backgroundFocused: "rgba(119, 76, 91, 1)",
    backgroundFocusedHover: "rgba(129, 86, 101, 1)",
    border: "hsla(330, 70%, 50%, 0.5)",
    borderFocused: "hsla(330, 80%, 60%, 0.7)",
    borderFocusedHover: "hsla(330, 90%, 70%, 0.8)",
    text: "#FF80C0",
    textShadow: `
      0 0 1px rgba(0, 0, 0, 75%),
      0 0 2px rgba(0, 0, 0, 50%),

      0 1px 1px rgba(0, 0, 0, 75%),
      0 1px 2px rgba(0, 0, 0, 50%),

      0 2px 1px rgba(0, 0, 0, 75%),
      0 2px 2px rgba(0, 0, 0, 50%)`,
  },
  highlight: "rgba(255, 160, 190, 1)",
  highlightBackground: "rgba(255, 160, 210, 1)",
  progress: "rgba(255, 160, 190, 1)",
  progressBackground: "rgba(58, 38, 53, 1)",
  progressBarRgb: "rgb(255, 190, 210)",
  startButton: "#FFF",
  taskbar: {
    active: "hsla(330, 100%, 50%, 0.7)",
    activeForeground: "hsla(330, 100%, 70%, 0.7)",
    background: "rgb(255, 190, 210)",
    foreground: "hsla(330, 100%, 60%, 0.7)",
    foregroundHover: "hsla(330, 100%, 75%, 0.7)",
    foregroundProgress: "hsla(330, 100%, 75%, 0.5)",
    hover: "hsla(330, 100%, 65%, 0.7)",
    peekBorder: "hsla(330, 100%, 75%, 0.5)",
  },
  text: "rgba(255, 255, 255, 0.9)",
  titleBar: {
    background: "rgba(255, 190, 210, 1)",
    backgroundHover: "rgba(255, 182, 193, 1)",
    backgroundInactive: "rgba(255, 160, 190, 1)",
    buttonInactive: "rgba(85, 62, 77, 1)",
    closeHover: "rgba(255, 140, 255, 1)",
    text: "rgb(255, 255, 255)",
    textInactive: "rgba(85, 62, 77, 1)",
  },
  fileExplorer: {
    background: "rgba(255, 140, 255, 1)",
    navigationBackground: "rgba(255, 160, 190, 1)",
    navigationIcons: "rgba(255, 190, 210, 1)",
    inputFieldsBackground: "rgba(255, 190, 210, 1)",
    inputFieldsText: "rgba(255, 140, 255, 1)",
  },
  window: {
    background: "rgba(255, 190, 210, 1)",
    outline: "hsla(330, 100%, 65%, 0.75)",
    outlineInactive: "hsla(330, 100%, 70%, 1)",
    shadow: "0 0 12px 0 rgba(0, 0, 0, 0.5)",
    shadowInactive: "0 0 8px 0 rgba(0, 0, 0, 0.5)",
  },
};

export default colors;
