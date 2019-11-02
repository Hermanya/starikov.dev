import codegen from "codegen.macro";

codegen`
const { getPosts, generateComponents } = require("./node");
generateComponents()
module.exports = \`
import React from "react";
import { Route, Redirect } from "react-router-dom";
import BlogPage from "./BlogPage";
import { prerenderedLoadable } from "../../prerenderedLoadable";
\` + getPosts().map((post, index) => {
    const componentName = \`BlogPost\${index}\`;
    return post.sections.map((_, index) => {
        const fullComponentName = \`\${componentName}Part\${index}\`;
        return \`const \${fullComponentName} = prerenderedLoadable(() => import("./__generated__/\${fullComponentName}"));\`;
    }).join("\\n");
  })
  .join("\\n")
`;

var blogRoutes: any[] = [];

codegen`
const { getPosts } = require("./node");
const code = getPosts()
        .map((post, index) => {
            const {metadata, sections} = post;
            const componentName = \`BlogPost\${index}\`;
            return \`
                <Redirect exact from="\${metadata.path}" to="\${metadata.path}/part-0"/>,
                <Route
                    path="\${metadata.path}"
                    key="\${metadata.path}"
                    render={() => 
                        <BlogPage
                            title="\${metadata.title}"
                            description="\${metadata.description}"
                            postComponents={[
                                \${
                                    sections
                                        .map((_, partIndex) => \`\${componentName}Part\${partIndex}\`)
                                        .join(",\\n")
                                }
                            ]}
                            postSubTitles={[
                                \${
                                    sections
                                        .map((section) => "'" + (section.split('\\n')[0].slice(2) || "Intro") + "'")
                                        .join(",\\n")
                                }
                            ]}
                            postPath={"\${metadata.path}"}
                        />
                    }
                />
            \`;
        })
        .join(',\\n');

console.log(code)

module.exports = \`
blogRoutes = [\${code}];
\`
`;
export default blogRoutes;
