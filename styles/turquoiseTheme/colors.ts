const colors = {
  background: "rgba(10, 68, 79, 1)",
  fileEntry: {
    background: "rgba(15, 87, 101, 1)",
    backgroundFocused: "rgba(25, 107, 121, 1)",
    backgroundFocusedHover: "rgba(35, 127, 141, 1)",
    border: "hsla(180, 70%, 40%, 0.5)",
    borderFocused: "hsla(180, 80%, 50%, 0.7)",
    borderFocusedHover: "hsla(180, 90%, 60%, 0.8)",
    text: "#00CED1",
    textShadow: `
      0 0 1px rgba(0, 0, 0, 75%),
      0 0 2px rgba(0, 0, 0, 50%),

      0 1px 1px rgba(0, 0, 0, 75%),
      0 1px 2px rgba(0, 0, 0, 50%),

      0 2px 1px rgba(0, 0, 0, 75%),
      0 2px 2px rgba(0, 0, 0, 50%)`,
  },
  highlight: "rgba(0, 191, 255, 1)",
  highlightBackground: "rgba(0, 191, 255, 0.3)",
  progress: "rgba(0, 191, 255, 1)",
  progressBackground: "rgba(10, 68, 79, 1)",
  progressBarRgb: "rgb(135, 206, 235)",
  startButton: "#FFF",
  taskbar: {
    active: "hsla(180, 100%, 40%, 0.7)",
    activeForeground: "hsla(180, 100%, 60%, 0.7)",
    background: "rgb(135, 206, 235)",
    foreground: "hsla(180, 100%, 50%, 0.7)",
    foregroundHover: "hsla(180, 100%, 65%, 0.7)",
    foregroundProgress: "hsla(180, 100%, 65%, 0.5)",
    hover: "hsla(180, 100%, 55%, 0.7)",
    peekBorder: "hsla(180, 100%, 65%, 0.5)",
  },
  text: "rgba(255, 255, 255, 0.9)",
  titleBar: {
    background: "rgba(135, 206, 235, 1)",
    backgroundHover: "rgba(119, 194, 215, 1)",
    backgroundInactive: "rgba(0, 191, 255, 1)",
    buttonInactive: "rgba(15, 87, 101, 1)",
    closeHover: "rgba(0, 191, 255, 1)",
    text: "rgb(255, 255, 255)",
    textInactive: "rgba(15, 87, 101, 1)",
  },
  fileExplorer: {
    background: "rgba(0, 191, 255, 0.5)",
    navigationBackground: "rgba(0, 191, 255, 0.7)",
    navigationIcons: "rgba(15, 87, 101, 1)",
    inputFieldsBackground: "rgba(15, 87, 101, 1)",
    inputFieldsText: "rgba(0, 191, 255, 1)",
  },
  window: {
    background: "rgba(15, 87, 101, 1)",
    outline: "hsla(180, 100%, 55%, 0.75)",
    outlineInactive: "hsla(180, 100%, 60%, 1)",
    shadow: "0 0 12px 0 rgba(0, 0, 0, 0.5)",
    shadowInactive: "0 0 8px 0 rgba(0, 0, 0, 0.5)",
  },
};

export default colors;
