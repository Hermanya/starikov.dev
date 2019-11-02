import React from "react";
import { BookOpen, Link2, Trello, User } from "react-feather";
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
              <User />
              About
            </TabBarLinkWithAnIcon>
            <TabBarLinkWithAnIcon to={`${match.path}/projects`}>
              <Trello />
              Projects
            </TabBarLinkWithAnIcon>
            <TabBarLinkWithAnIcon to={`${match.path}/blog`}>
              <BookOpen />
              Blog
            </TabBarLinkWithAnIcon>
            <TabBarLinkWithAnIcon to={`${match.path}/links`}>
              <Link2 />
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
