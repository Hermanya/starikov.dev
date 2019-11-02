const { run } = require("react-snap");

run({
  destination: "build/screenshots",
  saveAs: "png",
  viewport: {
    width: 400,
    height: 400
  }
});
