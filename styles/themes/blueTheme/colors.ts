const colors = {
  background: "#001122",
  fileEntry: {
    background: "hsla(200, 50%, 60%, 25%)",
    backgroundFocused: "hsla(200, 70%, 60%, 35%)",
    backgroundFocusedHover: "hsla(200, 90%, 60%, 30%)",
    border: "hsla(200, 50%, 60%, 30%)",
    borderFocused: "hsla(200, 70%, 60%, 35%)",
    borderFocusedHover: "hsla(200, 90%, 60%, 40%)",
    text: "#FFF",
    textShadow: `
      0 0 1px rgba(0, 0, 0, 75%),
      0 0 2px rgba(0, 0, 0, 50%)`,
  },
  highlight: "hsla(200, 100%, 70%, 90%)",
  progress: "hsla(113, 78%, 56%, 90%)",
  progressBackground: "hsla(104, 22%, 45%, 70%)",
  progressBarRgb: "rgb(6, 176, 37)",
  selectionHighlight: "hsla(200, 100%, 50%, 90%)",
  selectionHighlightBackground: "hsla(200, 100%, 50%, 30%)",
  taskbar: {
    active: "hsla(200, 40%, 30%, 70%)",
    activeForeground: "hsla(200, 40%, 50%, 70%)",
    ai: {
      balanced: ["rgb(112, 203, 255)", "rgb(40, 112, 234)", "rgb(0, 95, 184)"],
      creative: [
        "rgb(215, 167, 187)",
        "rgb(145, 72, 135)",
        "rgb(139, 37, 126)",
      ],
      precise: ["rgb(167, 224, 235)", "rgb(0, 104, 128)", "rgb(0, 83, 102)"],
    },
    background: "hsla(200, 40%, 20%, 70%)",
    button: {
      color: "#FFF",
    },
    foreground: "hsla(200, 30%, 50%, 70%)",
    foregroundHover: "hsla(200, 30%, 60%, 70%)",
    foregroundProgress: "hsla(104, 22%, 45%, 30%)",
    hover: "hsla(200, 40%, 35%, 70%)",
    peekBorder: "hsla(200, 30%, 60%, 50%)",
  },
  text: "rgba(255, 255, 255, 90%)",
  titleBar: {
    background: "rgb(0, 17, 34)",
    backgroundHover: "rgb(0, 34, 51)",
    backgroundInactive: "rgb(0, 51, 68)",
    buttonInactive: "rgb(128, 128, 128)",
    closeHover: "rgb(232, 17, 35)",
    text: "rgb(255, 255, 255)",
    textInactive: "rgb(170, 170, 170)",
  },
  window: {
    background: "#1A2A3A",
    outline: "hsla(200, 30%, 40%, 75%)",
    outlineInactive: "hsla(200, 25%, 45%, 100%)",
    shadow: "0 0 14px 0 rgba(0, 0, 0, 50%)",
    shadowInactive: "0 0 10px 0 rgba(0, 0, 0, 45%)",
  },
};

export default colors;
