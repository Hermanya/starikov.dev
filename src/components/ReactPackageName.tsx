import React from "react";
import ReactLogo from "./ReactLogo";
import { Paragraph, Title } from "exports";

export const ReactPackageName: React.FC<{
  name: string;
  description?: string;
}> = ({ name, description }) => {
  return (
    <>
      <ReactLogo />
      <Title style={{ margin: "16px 0" }}>{name}</Title>
      <Paragraph>{description}</Paragraph>
    </>
  );
};
