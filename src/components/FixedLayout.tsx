import { getSlotWidth } from "navigation";
import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const Appendage = styled.div`
  position: absolute;
  backdrop-filter: blur(4px);
  background: var(--background);
  background: var(--backdrop);
  padding: 12px;
`;
const Children = styled.main`
  overflow: auto;
  height: 100vh;
  padding: 12px;
  width: 100%;
`;

export const FixedLayout: React.FC<{
  before?: React.ReactNode;
  children?: React.ReactNode;
  after?: React.ReactNode;
  gap?: number;
}> = ({ before, children, after, gap = 12 }) => {
  const slotWidth = getSlotWidth();
  const appendageWidth = slotWidth / 3;
  const isLandScape = slotWidth > window.innerHeight;
  const layoutRef = React.useRef<any>(null);

  const beforeRef = React.useRef<any>(null);
  const [beforeOffset, setBeforeOffset] = React.useState(0);
  const afterRef = React.useRef<any>(null);
  const [afterOffset, setAfterOffset] = React.useState(0);
  React.useLayoutEffect(() => {
    if (beforeRef.current) {
      setBeforeOffset(
        isLandScape
          ? appendageWidth
          : parseInt(window.getComputedStyle(beforeRef.current).height)
      );
    }
    if (afterRef.current) {
      setAfterOffset(
        isLandScape
          ? appendageWidth
          : parseInt(window.getComputedStyle(afterRef.current).height)
      );
    }
  }, [appendageWidth, isLandScape, slotWidth]);
  return (
    <Layout ref={layoutRef}>
      {before && (
        <Appendage
          ref={beforeRef}
          style={
            isLandScape
              ? {
                  left: 0,
                  top: 0,
                  maxHeight: "100vh",
                  width: appendageWidth,
                }
              : {
                  top: 0,
                  left: 0,
                  right: 0,
                  boxShadow: `0 -${gap}px ${gap}px ${
                    gap * 2
                  }px var(--backdrop)`,
                }
          }
        >
          {before}
        </Appendage>
      )}
      <Children
        style={
          isLandScape
            ? {
                paddingLeft: beforeOffset + gap,
                paddingRight: afterOffset + gap,
              }
            : {
                paddingTop: beforeOffset + gap,
                paddingBottom: afterOffset + gap,
              }
        }
      >
        {children}
      </Children>
      <Appendage
        ref={afterRef}
        style={
          isLandScape
            ? {
                right: 0,
                top: 0,
                maxHeight: "100vh",
                width: appendageWidth,
              }
            : {
                bottom: 0,
                left: 0,
                right: 0,
                boxShadow: `0 ${gap}px ${gap}px ${gap * 2}px var(--backdrop)`,
              }
        }
      >
        {after}
      </Appendage>
    </Layout>
  );
};
