import React from "react";
// @ts-ignore
import IdealImage from "react-ideal-image";
import { Download, AlertOctagon, WifiOff, Loader } from "react-feather";

const defaultProps = {
  icons: {
    load: () => <Download />,
    loading: () => <Loader />,
    loaded: null,
    error: () => <AlertOctagon />,
    noicon: null,
    offline: () => <WifiOff />
  },
  theme: {
    placeholder: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      position: "relative"
    },
    img: {
      width: "100%",
      height: "auto",
      maxWidth: "100%",
      display: "block"
    },
    icon: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      filter: "drop-shadow(2px 4px 6px black)",
      textAlign: "center"
    },
    noscript: {
      position: "absolute",
      top: 0,
      left: 0
    }
  }
};

const Image: React.FC<any> = props => (
  <IdealImage {...defaultProps} {...props} />
);

export default Image;
