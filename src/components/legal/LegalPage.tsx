import React from "react";
import { Trello, User } from "react-feather";

import ResponsiveReactApp, {
  TabBarLinkWithAnIcon,
} from "../../responsive-page";
import Meta from "../Meta";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

const LegalPage = ({ match }: { match: any }) => {
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
            <TabBarLinkWithAnIcon to={`${match.path}/privacy-policy`}>
              <User strokeWidth="1.5" />
              Privacy
            </TabBarLinkWithAnIcon>
            <TabBarLinkWithAnIcon to={`${match.path}/terms-of-service`}>
              <Trello strokeWidth="1.5" />
              Terms
            </TabBarLinkWithAnIcon>
          </>
        }
        paths={[
          match.path + "/privacy-policy",
          match.path + "/terms-of-service",
        ]}
      >
        <PrivacyPolicy />
        <TermsOfService />
      </ResponsiveReactApp>
    </>
  );
};

export default LegalPage;
