import React from "react";
import { Link2, Trello, User, Rss } from "react-feather";
import About from "./About";
import Blog from "./Blog";
import Links from "./Links";
import PetProjects from "./PetProjects";
import ResponsiveReactApp, {
  TabBarLinkWithAnIcon
} from "../../responsive-page";
import Meta from "../Meta";

const LandingPage = ({ match }: { match: any }) => {
  return (
    <>
      <Meta
        title={"Herman Starikov"}
        description={"Software Developer specializing in React @ Coursera"}
        image={`/screenshots/about/me.png`}
      />
      <ResponsiveReactApp
        tabs={
          <>
            <TabBarLinkWithAnIcon to={`${match.path}/me`}>
              <User strokeWidth="1.5" />
              About
            </TabBarLinkWithAnIcon>
            <TabBarLinkWithAnIcon to={`${match.path}/projects`}>
              <Trello strokeWidth="1.5" />
              Projects
            </TabBarLinkWithAnIcon>
            <TabBarLinkWithAnIcon to={`${match.path}/blog`}>
              <Rss strokeWidth="1.5" />
              Blog
            </TabBarLinkWithAnIcon>
            <TabBarLinkWithAnIcon to={`${match.path}/links`}>
              <Link2 strokeWidth="1.5" />
              Links
            </TabBarLinkWithAnIcon>
          </>
        }
        paths={[
          match.path + "/me",
          match.path + "/projects",
          match.path + "/blog",
          match.path + "/links"
        ]}
      >
        <About />
        <PetProjects />
        <Blog />
        <Links />
      </ResponsiveReactApp>
    </>
  );
};

export default LandingPage;
