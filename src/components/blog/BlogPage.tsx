import React from "react";
import MoreFromTheBlog from "./MoreFromTheBlog";
import ResponsiveReactApp, { TabBarLink } from "../../responsive-page";

const BlogPage: React.FC<{
  postComponents: any;
  postPath: any;
}> = ({ postComponents, postPath }) => {
  return (
    <ResponsiveReactApp
      tabs={
        <>
          {postComponents.map((part: any, index: number, all: any[]) => (
            <TabBarLink to={`${postPath}/part-${index}`} key={index}>
              {index === 0
                ? "Intro"
                : index === all.length - 1
                ? "Summary"
                : `Part ${index}`}
            </TabBarLink>
          ))}
          <TabBarLink to={postPath + "/other-posts"}>More</TabBarLink>
        </>
      }
      paths={[
        ...postComponents.map(
          (part: any, index: number) => `${postPath}/part-${index}`
        ),
        postPath + "/other-posts"
      ]}
    >
      {postComponents.map((Part: any, index: number) => (
        <Part key={index} />
      ))}
      <MoreFromTheBlog exceptForPath={postPath} />
    </ResponsiveReactApp>
  );
};
export default BlogPage;
