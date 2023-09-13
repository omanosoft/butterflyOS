const colors = {
  background: "rgba(254, 251, 250, 1)",
  fileEntry: {
    background: "rgba(254, 226, 241, 1)",
    backgroundFocused: "rgba(251, 165, 214, 1)",
    backgroundFocusedHover: "rgba(238, 166, 210, 1)",
    border: "hsla(330, 70%, 90%, 0.5)",
    borderFocused: "hsla(330, 80%, 90%, 0.7)",
    borderFocusedHover: "hsla(330, 90%, 90%, 0.8)",
    text: "rgba(251, 120, 187, 1)",
    textShadow: `
      0 0 1px rgba(0, 0, 0, 75%),
      0 0 2px rgba(0, 0, 0, 50%),

      0 1px 1px rgba(0, 0, 0, 75%),
      0 1px 2px rgba(0, 0, 0, 50%),

      0 2px 1px rgba(0, 0, 0, 75%),
      0 2px 2px rgba(0, 0, 0, 50%)`,
  },
  highlight: "rgba(251, 165, 214, 1)",
  highlightBackground: "rgba(251, 165, 214, 0.5)",
  progress: "rgba(251, 165, 214, 1)",
  progressBackground: "rgba(254, 251, 250, 1)",
  progressBarRgb: "rgb(251, 165, 214)",
  startButton: "#FFF",
  taskbar: {
    active: "hsla(330, 100%, 80%, 0.7)",
    activeForeground: "hsla(330, 100%, 85%, 0.7)",
    background: "rgb(251, 165, 214)",
    foreground: "hsla(330, 100%, 75%, 0.7)",
    foregroundHover: "hsla(330, 100%, 85%, 0.8)",
    foregroundProgress: "hsla(330, 100%, 85%, 0.6)",
    hover: "hsla(330, 100%, 80%, 0.7)",
    peekBorder: "hsla(330, 100%, 85%, 0.5)",
  },
  text: "rgba(0, 0, 0, 0.9)",
  titleBar: {
    background: "rgba(251, 165, 214, 1)",
    backgroundHover: "rgba(238, 166, 210, 1)",
    backgroundInactive: "rgba(251, 165, 214, 1)",
    buttonInactive: "rgba(254, 226, 241, 1)",
    closeHover: "rgba(251, 120, 187, 1)",
    text: "rgb(0, 0, 0)",
    textInactive: "rgba(254, 226, 241, 1)",
  },
  fileExplorer: {
    background: "rgba(251, 165, 214, 0.8)",
    navigationBackground: "rgba(251, 165, 214, 0.9)",
    navigationIcons: "rgba(254, 226, 241, 1)",
    inputFieldsBackground: "rgba(254, 226, 241, 1)",
    inputFieldsText: "rgba(251, 165, 214, 1)",
  },
  window: {
    background: "rgba(254, 226, 241, 1)",
    outline: "hsla(330, 100%, 80%, 0.8)",
    outlineInactive: "hsla(330, 100%, 85%, 1)",
    shadow: "0 0 12px 0 rgba(0, 0, 0, 0.5)",
    shadowInactive: "0 0 8px 0 rgba(0, 0, 0, 0.5)",
  },
};

export default colors;
