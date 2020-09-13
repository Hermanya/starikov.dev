import React from "react";
import { useNavigationStateSignature } from "react-slot-navigation/context";
import Export from "components/Export";

const UseNavigationStateSlot = () => {
  return (
    <Export
      slot="useNavigationState"
      name="useNavigationState"
      purpose={
        <>
          This React hook exposes navigation state. This can be used for
          integration with your UI, such as to highlight active links, or render
          them conditionally.
        </>
      }
      typeSignature={useNavigationStateSignature}
    />
  );
};

export default UseNavigationStateSlot;
