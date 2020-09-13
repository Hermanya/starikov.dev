import React from "react";

export const Code: React.FC<{}> = ({ children, ...props }) => (
  <pre className="Code" {...props}>
    <code>{children}</code>
  </pre>
);
