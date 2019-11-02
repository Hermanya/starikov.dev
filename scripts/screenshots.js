const { run } = require("react-snap");

run({
  destination: "build/screenshots",
  saveAs: "png",
  viewport: {
    width: 1200,
    height: 628
  },
  puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"],
  puppeteerExecutablePath: "/opt/google/chrome/google-chrome"
});
