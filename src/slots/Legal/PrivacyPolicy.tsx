import React from "react";
import { NavigationLinkListItem } from "navigation";
import ExternalLink from "components/ExternalLink";
import Card from "components/Card";
import { Title } from "components/typography";

export default () => {
  return (
    <div>
      <Title as="h2">Privacy Policy</Title>
      <p>
        Your privacy is important to me. It is my policy to respect your privacy
        regarding any information I may collect from you across my website,{" "}
        <ExternalLink href="http://starikov.dev">
          http://starikov.dev
        </ExternalLink>
        , and other sites I own and operate.
      </p>
      <p>
        I only ask for personal information when I truly need it to provide a
        service to you. I collect it by fair and lawful means, with your
        knowledge and consent. I also let you know why I’m collecting it and how
        it will be used.
      </p>
      <p>
        I only retain collected information for as long as necessary to provide
        you with your requested service. What data I store, I’ll protect within
        commercially acceptable means to prevent loss and theft, as well as
        unauthorized access, disclosure, copying, use or modification.
      </p>
      <p>
        I don’t share any personally identifying information publicly or with
        third-parties, except when required to by law.
      </p>
      <p>
        My website may link to external sites that are not operated by me.
        Please be aware that I have no control over the content and practices of
        these sites, and cannot accept responsibility or liability for their
        respective privacy policies.
      </p>
      <p>
        You are free to refuse my request for your personal information, with
        the understanding that I may be unable to provide you with some of your
        desired services.
      </p>
      <p>
        Your continued use of my website will be regarded as acceptance of our
        practices around privacy and personal information. If you have any
        questions about how I handle user data and personal information, feel
        free to contact me.
      </p>
      <p>This policy is effective as of 5 April 2020.</p>
      <p>
        <ExternalLink href="https://getterms.io" rel="nofollow">
          Privacy Policy created with GetTerms.
        </ExternalLink>
      </p>
      <Card withPadding={false} style={{ margin: "auto 0 16px" }}>
        <NavigationLinkListItem
          to={"Profile"}
          toArgs={["Herman"]}
          from={"PrivacyPolicy"}
        >
          starikov.dev
        </NavigationLinkListItem>
      </Card>
    </div>
  );
};
