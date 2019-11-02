const fs = require("fs");
const marked = require("marked");

const formatDate = date =>
  new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

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

const blogPostCode = (
  content,
  metadata,
  index,
  footerLinks
) => `import React from 'react';
import 'styled-components/macro';
import Container from '../../Container';
${
  index === 0
    ? `
      import Author from '../../Author';
      import {PageTitle, Description} from '../../typography';
    `
    : ``
}
export default () => {
    return (<Container>
        ${
          index === 0
            ? `
              <Author/>
              <PageTitle css="margin: 1rem 0;">${metadata.title}</PageTitle>
              <Description>${`Published on ${formatDate(metadata.created)}${
                metadata.updated
                  ? `.<br/><br/>Edited on ${formatDate(metadata.updated)}.`
                  : ``
              }`}</Description>
              <br/>
            `
            : ``
        }
        ${marked(content + "\n" + footerLinks)
          .replace(/\{|\}/g, match => `{'${match}'}`)
          .replace(/\n/g, "<br/>")
          .replace(/class=/g, "className=")}
    </Container>)
}`;

module.exports.generateComponents = (path = `${__dirname}/__generated__`) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  module.exports.getPosts().forEach((post, index) => {
    const componentName = `BlogPost${index}`;
    const { metadata, sections, footerLinks } = post;
    sections.forEach((section, index) => {
      fs.writeFileSync(
        `${path}/${componentName}Part${index}.tsx`,
        blogPostCode(
          index === 0 ? section : "#" + section,
          metadata,
          index,
          footerLinks
        ),
        "utf8"
      );
    });
  });
};

const getMeta = head => {
  const metadata = head.split("\n").reduce((data, line) => {
    const parts = line.split(":");
    data[parts[0]] =
      parts[1] && parts[1].trim().startsWith('"')
        ? parts[1].trim().slice(1, -1)
        : parts[1] && parts[1].trim();
    return data;
  }, {});
  return metadata;
};
module.exports.getPosts = (path = `${__dirname}/../../reviews`) => {
  const files = fs.readdirSync(path);
  const posts = files.map(file => {
    const rawContent = fs.readFileSync(`${path}/${file}`, "utf8");
    const [, head, body, footerLinks] = rawContent.split("---\n");
    return {
      rawContent,
      metadata: getMeta(head),
      body,
      sections: body.split("\n#"),
      footerLinks
    };
  });
  return posts;
};

module.exports.getPostMetaDatas = path =>
  module.exports.getPosts(path).map(post => post.metadata);
