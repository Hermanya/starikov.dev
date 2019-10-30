---
path: "/reviews/create-react-app-with-file-system-api"
created: "2019-10-29"
title: "Read a File in Create React App"
description: "How to use preval.macro to use File System in CRA"
---

Imagine you have a text file on your computer. It could be JSON, CSV, markdown or any other format. And now you want to create a React app to make the information in that file more presentable and maybe somewhat interactive. Right? So, you run [create-react-app], you drag and drop your file into the project, and now you need to figure out how to hook it up. If it's JSON, you're in luck.

```js
import json from './my-file.json';
```

Done!

Now, if it's not JSON, let's see how you can use [preval.macro][preval] to read any kind of a file from the file system in an app created by `create-react-app`.

## Preval macro

[Kent C. Dodds][kent] is a talented developer who has made a lot of nifty projects. More specifically he made [babel-plugin-macros][babel-plugin-macros] which is now integrated into `create-react-app`. It's a plugin that lets you use babel macros, which run at build-time in a node.js environment.

One such babel macro is [preval.macro][preval]. It's very simple. It takes a string, executes it in node, and inlines the resulting value in your code. It *pre-evaluates* your `node.js` code.

It's like writing a node script and executing it every time before you `yarn start` your app. But with `preval.macro` the development experience is more seamless.

## CSV Example

In this example, I will display Comma Separated Values from a local file in an HTML table using React.

```jsx
import React from "react";
import preval from "preval.macro";


const myData = preval`
  module.exports = require('fs').readFileSync(
    __dirname + '/my-file.csv', 'utf8'
  ).split('\\n').map(line => line.split(','))
`;

const CommaSeparatedValuesExample = () => {
  const [labels, ...rows] = myData;
  return (
    <table>
      <tr>
        {labels.map(label => (
          <th key={label}>{label}</th>
        ))}
      </tr>
      {rows.map((row, index) => (
        <tr key={index}>
          {row.map(cell => (
            <td key={cell}>{cell}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};
```

Here is a [Codesandbox of this](https://codesandbox.io/s/preval-macro-codesandbox-jefzk). I read the file, parse it, inline data into our App source file, and render it in a basic HTML table.

> NOTE: If you change the CSV file, you need to re-run `yarn start`!

## Markdown

Or imagine you want to start a blog. You've heard of Gatsby, but you are not impressed. You think displaying rendered markdown is simple enough to use `create-react-app` for that. Consider the following example.

```jsx
import React from "react";
import preval from "preval.macro";

const myBlogPostJSX = preval`
  module.exports = require('marked')(require('fs').readFileSync(
    __dirname + '/my-blog-post.md', 'utf8'
  ))
`;

const MarkdownExample = () => {
  return (
    <article dangerouslySetInnerHTML={{__html: myBlogPostJSX}}/>
  );
};

```

Here I'm reading a file, then parsing it with `remark`. And rendering it as a string of html using `dangerouslySetInnerHTML`. This is very simple.

For my personal website (the one you're on right now) I'm doing something similar. Except I'm generating blog post components, so that I can lazy load them in runtime. But all markdown parsing is done at build time.

## Closing words

You probably already knew that `create-react-app` is awesome. But I bet you did not know how much more awesome it really is thanks to [babel-plugin-macros][babel-plugin-macros] and all these build time super powers you have with macros such as `preval`. I hope this new knowledge comes in handy on your next React project!

Do you have any questions or comments? [Talk to me on Twitter](https://twitter.com/Hermanhasawish/status/1189562475143929857).

---

[create-react-app]: https://create-react-app.dev/
[kent]: https://kentcdodds.com
[babel-plugin-macros]: https://github.com/kentcdodds/babel-plugin-macros
[preval]: https://github.com/kentcdodds/preval.macro
