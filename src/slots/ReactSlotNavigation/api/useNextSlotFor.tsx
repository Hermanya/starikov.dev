import React from "react";
import { signatureForuseNextSlotFor } from "react-slot-navigation/hooks/useNextSlotFor";
import Export from "components/Export";

const useNextSlotFor = () => {
  return (
    <Export
      slot="useNextSlotFor"
      name="useNextSlotFor"
      purpose={
        <>
          Render more content if screen permits. Use this when you have a link
          to a <em>next page</em>.
        </>
      }
      typeSignature={signatureForuseNextSlotFor}
    />
  );
};

export default useNextSlotFor;
