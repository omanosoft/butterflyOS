const colors = {
  background: "#1A0D14",
  fileEntry: {
    background: "hsla(330, 50%, 60%, 25%)",
    backgroundFocused: "hsla(330, 70%, 60%, 35%)",
    backgroundFocusedHover: "hsla(330, 90%, 60%, 30%)",
    border: "hsla(330, 50%, 60%, 30%)",
    borderFocused: "hsla(330, 70%, 60%, 35%)",
    borderFocusedHover: "hsla(330, 90%, 60%, 40%)",
    text: "#FFF",
    textShadow: `
      0 0 1px rgba(0, 0, 0, 75%),
      0 0 2px rgba(0, 0, 0, 50%)`,
  },
  highlight: "hsla(330, 100%, 70%, 90%)",
  progress: "hsla(113, 78%, 56%, 90%)",
  progressBackground: "hsla(104, 22%, 45%, 70%)",
  progressBarRgb: "rgb(255, 105, 180)",
  selectionHighlight: "hsla(330, 100%, 50%, 90%)",
  selectionHighlightBackground: "hsla(330, 100%, 50%, 30%)",
  taskbar: {
    active: "hsla(330, 40%, 25%, 70%)",
    activeForeground: "hsla(330, 40%, 45%, 70%)",
    ai: {
      balanced: ["rgb(112, 203, 255)", "rgb(40, 112, 234)", "rgb(0, 95, 184)"],
      creative: [
        "rgb(215, 167, 187)",
        "rgb(145, 72, 135)",
        "rgb(139, 37, 126)",
      ],
      precise: ["rgb(167, 224, 235)", "rgb(0, 104, 128)", "rgb(0, 83, 102)"],
    },
    background: "hsla(330, 40%, 15%, 70%)",
    button: {
      color: "#FFF",
    },
    foreground: "hsla(330, 30%, 45%, 70%)",
    foregroundHover: "hsla(330, 30%, 55%, 70%)",
    foregroundProgress: "hsla(104, 22%, 45%, 30%)",
    hover: "hsla(330, 40%, 30%, 70%)",
    peekBorder: "hsla(330, 30%, 55%, 50%)",
  },
  text: "rgba(255, 255, 255, 90%)",
  titleBar: {
    background: "rgb(26, 13, 20)",
    backgroundHover: "rgb(40, 20, 30)",
    backgroundInactive: "rgb(55, 27, 40)",
    buttonInactive: "rgb(128, 128, 128)",
    closeHover: "rgb(232, 17, 35)",
    text: "rgb(255, 255, 255)",
    textInactive: "rgb(170, 170, 170)",
  },
  window: {
    background: "#2A1A22",
    outline: "hsla(330, 30%, 40%, 75%)",
    outlineInactive: "hsla(330, 25%, 45%, 100%)",
    shadow: "0 0 14px 0 rgba(0, 0, 0, 50%)",
    shadowInactive: "0 0 10px 0 rgba(0, 0, 0, 45%)",
  },
};

export default colors;
