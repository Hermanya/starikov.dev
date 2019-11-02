import React from "react";
import MoreFromTheBlog from "./MoreFromTheBlog";
import ResponsiveReactApp, { TabBarLink } from "../../responsive-page";
import Meta from "../Meta";

const BlogPage: React.FC<{
  postComponents: any;
  postSubTitles: any;
  postPath: any;
  title: string;
  description: string;
}> = ({ postComponents, postPath, postSubTitles, title, description }) => {
  return (
    <>
      <Meta
        title={title}
        description={description}
        image={`/screenshots${postPath}/part-0.png`}
        pathname={postPath}
        article
      />
      <ResponsiveReactApp
        tabs={
          <>
            {postComponents.map((part: any, index: number, all: any[]) => (
              <TabBarLink to={`${postPath}/part-${index}`} key={index}>
                {`${postSubTitles[index]}`}
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
    </>
  );
};
export default BlogPage;
