import React from "react";
import { signatureForLink } from "react-slot-navigation/components/Link";
import Export from "components/Export";

const LinkSlot: React.FC = () => {
  return (
    <Export
      slot="Link"
      name="Link"
      purpose={<>It's just like anchor tag, but better!</>}
      typeSignature={signatureForLink}
    />
  );
};

export default LinkSlot;
