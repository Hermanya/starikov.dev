const fs = require("fs");
const { getMeta } = require("./util");
const files = fs.readdirSync(__dirname + "/../reviews");

const marked = require("marked");

// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return require("highlight.js").highlightAuto(code).value;
  },
  gfm: true,
  // breaks: true,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  langPrefix: "hljs language-",
  xhtml: true
});

const posts = files.map(file =>
  fs.readFileSync(`${__dirname}/../reviews/${file}`, "utf8")
);

if (!fs.existsSync(`${__dirname}/../components/__generated__`)) {
  fs.mkdirSync(`${__dirname}/../components/__generated__`);
}

posts.forEach((post, index) => {
  const componentName = `BlogPost${index}`;
  const meta = getMeta(post);
  const content = post.split("---\n")[2];
  const parts = content.split("\n#");
  parts.forEach((part, index) => {
    fs.writeFileSync(
      `${__dirname}/../components/__generated__/${componentName}Part${index}.js`,
      `
import React from 'react';
import Container from '../Container';
export default () => {
    return (<Container>
        ${marked((index === 0 ? `# ${meta.title}\n` : "#") + part)
          .replace(/\{|\}/g, match => `{'${match}'}`)
          .replace(/\n/g, "<br/>")}
    </Container>)
}
    `,
      "utf8"
    );
  });
});
