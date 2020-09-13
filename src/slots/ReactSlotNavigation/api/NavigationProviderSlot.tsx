import React from "react";
import { signatureForNavigationProvider } from "react-slot-navigation/components/NavigationProvider";
import Export from "components/Export";

const NavigationProvider: React.FC = () => {
  return (
    <Export
      slot="NavigationProvider"
      name="NavigationProvider"
      purpose={<>This is where magic happens!</>}
      typeSignature={signatureForNavigationProvider}
    />
  );
};

export default NavigationProvider;
