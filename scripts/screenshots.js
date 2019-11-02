const { run } = require("react-snap");

run({
  destination: "build/screenshots",
  saveAs: "png",
  viewport: {
    width: 512,
    height: 512
  }
});
