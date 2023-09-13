const colors = {
  background: "rgb(236, 0, 147)", // Hot Pink
  fileEntry: {
    background: "rgb(254, 194, 226)", // Deep Pink
    backgroundFocused: "rgba(199, 21, 133, 1)", // Medium Violet Red
    backgroundFocusedHover: "rgba(218, 112, 214, 1)", // Orchid
    border: "hsla(288, 100%, 90%, 0.5)", // Light Orchid Border
    borderFocused: "hsla(288, 100%, 95%, 0.7)",
    borderFocusedHover: "hsla(288, 100%, 97%, 0.8)",
    text: "rgba(255, 255, 255, 1)", // White
    textShadow: `
      0 0 1px rgba(0, 0, 0, 0.2),
      0 0 2px rgba(0, 0, 0, 0.1)`,
  },
  highlight: "rgb(206, 0, 147)", // Magenta
  highlightBackground: "rgba(238, 30, 238, 0.5)", // Orchid Background
  progress: "rgba(199, 21, 133, 1)", // Medium Violet Red
  progressBackground: "rgba(255, 105, 180, 1)", // Hot Pink
  progressBarRgb: "rgb(255, 0, 155)", // Magenta
  startButton: "#FFF", // White
  taskbar: {
    active: "rgb(252, 129, 192)", // Orchid
    activeForeground: "hsla(300, 100%, 80%, 0.7)",
    background: "rgb(255, 105, 180)", // Hot Pink
    foreground: "hsla(320, 100%, 85%, 0.7)",
    foregroundHover: "hsla(320, 100%, 90%, 0.8)",
    foregroundProgress: "hsla(320, 100%, 90%, 0.6)",
    hover: "hsla(300, 100%, 75%, 0.7)", // Orchid
    peekBorder: "hsla(320, 100%, 90%, 0.5)",
  },
  text: "rgba(0, 0, 0, 0.8)", // Almost Black
  titleBar: {
    background: "rgb(236, 0, 147)", // Deep Pink
    backgroundHover: "rgba(199, 21, 133, 1)", // Medium Violet Red
    backgroundInactive: "rgba(236, 0, 147, 0.8)", // Orchid
    buttonInactive: "rgb(252, 129, 192)", // Orchid
    closeHover: "rgba(199, 21, 133, 1)", // Medium Violet Red
    text: "rgb(1, 1, 1)", // White
    textInactive: "rgb(254, 194, 226)", // Orchid
  },
  fileExplorer: {
    background: "rgb(254, 194, 226)", // Hot Pink
    navigationBackground: "rgb(252, 129, 192)", // Deep Pink
    navigationIcons: "rgba(255, 255, 255, 1)", // White
    inputFieldsBackground: "rgb(254, 194, 226)", // Magenta
    inputFieldsText: "rgb(236, 0, 147)", // Hot Pink
  },
  window: {
    background: "rgb(236, 0, 147)", // Magenta
    outline: "hsla(300, 100%, 75%, 0.8)",
    outlineInactive: "hsla(300, 100%, 80%, 1)",
    shadow: "0 0 12px 0 rgba(0, 0, 0, 0.2)",
    shadowInactive: "0 0 8px 0 rgba(0, 0, 0, 0.1)",
  },
};

export default colors;
