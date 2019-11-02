import React from "react";
import styled from "styled-components";
// @ts-ignore
import lqip from "lqip.macro";
import Image from "./Image";
import image from "../images/me-looking-right.png";
const placeholder = lqip("../images/me-looking-right.png");

const Me = styled.div<{ width: number }>`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  align-self: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  border-radius: 125px 125px 4px 4px;
  overflow: hidden;
  background-color: var(--gray);
  background-image: linear-gradient(62deg, var(--purple) 0%, var(--pink) 100%);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const Avatar: React.FC<{ width: number }> = ({ width, ...props }) => {
  return (
    <Me width={width} {...props}>
      <Image
        placeholder={{ lqip: placeholder }}
        srcSet={[{ src: image, width: width }]}
        alt="Herman Starkov"
        width={width}
        height={width * 0.871}
      />
    </Me>
  );
};

export default Avatar;
