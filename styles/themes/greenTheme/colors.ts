const colors = {
  background: "#0F2020",
  fileEntry: {
    background: "hsla(120, 40%, 50%, 25%)",
    backgroundFocused: "hsla(120, 60%, 50%, 35%)",
    backgroundFocusedHover: "hsla(120, 80%, 50%, 30%)",
    border: "hsla(120, 40%, 50%, 30%)",
    borderFocused: "hsla(120, 60%, 50%, 35%)",
    borderFocusedHover: "hsla(120, 80%, 50%, 40%)",
    text: "#FFF",
    textShadow: `
      0 0 1px rgba(0, 0, 0, 75%),
      0 0 2px rgba(0, 0, 0, 50%)`,
  },
  highlight: "hsla(120, 100%, 60%, 90%)",
  progress: "hsla(120, 78%, 50%, 90%)",
  progressBackground: "hsla(120, 30%, 40%, 70%)",
  progressBarRgb: "rgb(0, 200, 50)",
  selectionHighlight: "hsla(120, 100%, 40%, 90%)",
  selectionHighlightBackground: "hsla(120, 100%, 40%, 30%)",
  taskbar: {
    active: "hsla(120, 40%, 25%, 70%)",
    activeForeground: "hsla(120, 40%, 45%, 70%)",
    ai: {
      balanced: ["rgb(112, 203, 255)", "rgb(40, 112, 234)", "rgb(0, 95, 184)"],
      creative: [
        "rgb(215, 167, 187)",
        "rgb(145, 72, 135)",
        "rgb(139, 37, 126)",
      ],
      precise: ["rgb(167, 224, 235)", "rgb(0, 104, 128)", "rgb(0, 83, 102)"],
    },
    background: "hsla(120, 40%, 15%, 70%)",
    button: {
      color: "#FFF",
    },
    foreground: "hsla(120, 30%, 45%, 70%)",
    foregroundHover: "hsla(120, 30%, 55%, 70%)",
    foregroundProgress: "hsla(120, 30%, 40%, 30%)",
    hover: "hsla(120, 40%, 30%, 70%)",
    peekBorder: "hsla(120, 30%, 55%, 50%)",
  },
  text: "rgba(255, 255, 255, 90%)",
  titleBar: {
    background: "rgb(15, 32, 32)",
    backgroundHover: "rgb(20, 40, 40)",
    backgroundInactive: "rgb(25, 48, 48)",
    buttonInactive: "rgb(128, 128, 128)",
    closeHover: "rgb(232, 17, 35)",
    text: "rgb(255, 255, 255)",
    textInactive: "rgb(170, 170, 170)",
  },
  window: {
    background: "#1A2A1A",
    outline: "hsla(120, 30%, 35%, 75%)",
    outlineInactive: "hsla(120, 25%, 40%, 100%)",
    shadow: "0 0 14px 0 rgba(0, 0, 0, 50%)",
    shadowInactive: "0 0 10px 0 rgba(0, 0, 0, 45%)",
  },
};

export default colors;
