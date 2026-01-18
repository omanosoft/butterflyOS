const colors = {
  background: "#FFF5F9",
  fileEntry: {
    background: "hsla(330, 40%, 70%, 25%)",
    backgroundFocused: "hsla(330, 50%, 70%, 35%)",
    backgroundFocusedHover: "hsla(330, 60%, 70%, 30%)",
    border: "hsla(330, 40%, 70%, 30%)",
    borderFocused: "hsla(330, 50%, 70%, 35%)",
    borderFocusedHover: "hsla(330, 60%, 70%, 40%)",
    text: "#000",
    textShadow: `
      0 0 1px rgba(255, 255, 255, 75%),
      0 0 2px rgba(255, 255, 255, 50%)`,
  },
  highlight: "hsla(330, 100%, 60%, 90%)",
  progress: "hsla(330, 78%, 50%, 90%)",
  progressBackground: "hsla(330, 30%, 70%, 70%)",
  progressBarRgb: "rgb(255, 105, 180)",
  selectionHighlight: "hsla(330, 100%, 70%, 90%)",
  selectionHighlightBackground: "hsla(330, 100%, 70%, 30%)",
  taskbar: {
    active: "hsla(330, 40%, 70%, 70%)",
    activeForeground: "hsla(330, 40%, 50%, 70%)",
    ai: {
      balanced: ["rgb(112, 203, 255)", "rgb(40, 112, 234)", "rgb(0, 95, 184)"],
      creative: [
        "rgb(215, 167, 187)",
        "rgb(145, 72, 135)",
        "rgb(139, 37, 126)",
      ],
      precise: ["rgb(167, 224, 235)", "rgb(0, 104, 128)", "rgb(0, 83, 102)"],
    },
    background: "hsla(330, 30%, 85%, 70%)",
    button: {
      color: "#000",
    },
    foreground: "hsla(330, 30%, 50%, 70%)",
    foregroundHover: "hsla(330, 30%, 40%, 70%)",
    foregroundProgress: "hsla(330, 30%, 70%, 30%)",
    hover: "hsla(330, 40%, 75%, 70%)",
    peekBorder: "hsla(330, 30%, 60%, 50%)",
  },
  text: "rgba(0, 0, 0, 90%)",
  titleBar: {
    background: "rgb(255, 245, 249)",
    backgroundHover: "rgb(255, 235, 245)",
    backgroundInactive: "rgb(250, 225, 235)",
    buttonInactive: "rgb(128, 128, 128)",
    closeHover: "rgb(232, 17, 35)",
    text: "rgb(0, 0, 0)",
    textInactive: "rgb(85, 85, 85)",
  },
  window: {
    background: "#FFF0F5",
    outline: "hsla(330, 30%, 70%, 75%)",
    outlineInactive: "hsla(330, 25%, 75%, 100%)",
    shadow: "0 0 14px 0 rgba(0, 0, 0, 50%)",
    shadowInactive: "0 0 10px 0 rgba(0, 0, 0, 45%)",
  },
};

export default colors;
