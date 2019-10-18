import React from "react";
import { BookOpen, Link2, Trello, User } from "react-feather";
import About from "./About";
import Blog from "./Blog";
import Links from "./Links";
import PetProjects from "./PetProjects";
import ResponsiveReactApp, { TabBarLink } from "../../responsive-page";

const LandingPage = ({ match }: { match: any }) => {
  return (
    <ResponsiveReactApp
      tabs={
        <>
          <TabBarLink to={`${match.path}/me`}>
            <User />
            About
          </TabBarLink>
          <TabBarLink to={`${match.path}/projects`}>
            <Trello />
            Projects
          </TabBarLink>
          <TabBarLink to={`${match.path}/blog`}>
            <BookOpen />
            Blog
          </TabBarLink>
          <TabBarLink to={`${match.path}/links`}>
            <Link2 />
            Links
          </TabBarLink>
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
  );
};

export default LandingPage;
