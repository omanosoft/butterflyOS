const colors = {
  background: "#FFFFFF",
  fileEntry: {
    background: "hsla(207, 30%, 20%, 25%)",
    backgroundFocused: "hsla(207, 60%, 20%, 35%)",
    backgroundFocusedHover: "hsla(207, 90%, 20%, 30%)",
    border: "hsla(207, 30%, 20%, 30%)",
    borderFocused: "hsla(207, 60%, 20%, 35%)",
    borderFocusedHover: "hsla(207, 90%, 20%, 40%)",
    text: "#000",
    textShadow: `
      0 0 1px rgba(255, 255, 255, 75%),
      0 0 2px rgba(255, 255, 255, 50%)`,
  },
  highlight: "hsla(207, 100%, 50%, 90%)",
  progress: "hsla(113, 78%, 40%, 90%)",
  progressBackground: "hsla(104, 22%, 70%, 70%)",
  progressBarRgb: "rgb(6, 176, 37)",
  selectionHighlight: "hsla(207, 100%, 60%, 90%)",
  selectionHighlightBackground: "hsla(207, 100%, 60%, 30%)",
  taskbar: {
    active: "hsla(0, 0%, 70%, 70%)",
    activeForeground: "hsla(0, 0%, 40%, 70%)",
    ai: {
      balanced: ["rgb(112, 203, 255)", "rgb(40, 112, 234)", "rgb(0, 95, 184)"],
      creative: [
        "rgb(215, 167, 187)",
        "rgb(145, 72, 135)",
        "rgb(139, 37, 126)",
      ],
      precise: ["rgb(167, 224, 235)", "rgb(0, 104, 128)", "rgb(0, 83, 102)"],
    },
    background: "hsla(0, 0%, 85%, 70%)",
    button: {
      color: "#000",
    },
    foreground: "hsla(0, 0%, 40%, 70%)",
    foregroundHover: "hsla(0, 0%, 30%, 70%)",
    foregroundProgress: "hsla(104, 22%, 70%, 30%)",
    hover: "hsla(0, 0%, 70%, 70%)",
    peekBorder: "hsla(0, 0%, 50%, 50%)",
  },
  text: "rgba(0, 0, 0, 90%)",
  titleBar: {
    background: "rgb(255, 255, 255)",
    backgroundHover: "rgb(230, 230, 230)",
    backgroundInactive: "rgb(213, 213, 213)",
    buttonInactive: "rgb(128, 128, 128)",
    closeHover: "rgb(232, 17, 35)",
    text: "rgb(0, 0, 0)",
    textInactive: "rgb(85, 85, 85)",
  },
  window: {
    background: "#F5F5F5",
    outline: "hsla(0, 0%, 75%, 75%)",
    outlineInactive: "hsla(0, 0%, 70%, 100%)",
    shadow: "0 0 14px 0 rgba(0, 0, 0, 50%)",
    shadowInactive: "0 0 10px 0 rgba(0, 0, 0, 45%)",
  },
};

export default colors;
