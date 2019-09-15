import React from "react";
import { Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import useWindowSize from "./hooks/useWindowSize";
import TabBar from "./TabBar";

const ViewPort = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;
const Board = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  transition: transform 0.25s;
  transition-timing-function: ease-in-out;
`;
const Mobile = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 2}px) {
    width: 50vw;
  }
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 3}px) {
    width: 33.333333vw;
  }
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 4}px) {
    width: 25vw;
  }
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 5}px) {
    width: 20vw;
  }
  /* padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px); */
`;

const ResponsiveReactApp: React.FC<{
  children: any[];
  tabs: any;
  paths: string[];
  minimumTabSize?: number;
  routerProps?: any;
}> = ({ children, tabs, minimumTabSize = 350, paths }) => {
  const size = useWindowSize();
  const componentsPerScreen = (size.width / minimumTabSize) | 0;
  const childSize = size.width / componentsPerScreen;
  console.log(size, childSize);
  return (
    <ThemeProvider
      theme={{
        minimumTabSize
      }}
    >
      <ViewPort>
        <Switch>
          {children.flat().map((_, index) => (
            <Route
              exact
              path={`${paths[index] || index || ""}`}
              render={({ location }) => {
                console.log(index, componentsPerScreen, children.flat().length);

                return (
                  <>
                    <Board
                      style={{
                        transform: `translateX(-${(100 / componentsPerScreen) *
                          Math.min(
                            index,
                            children.flat().length - componentsPerScreen
                          )}vw)`
                      }}
                    >
                      {children.flat().map((child, index) => {
                        return <Mobile key={index}>{child}</Mobile>;
                      })}
                    </Board>
                    {componentsPerScreen < children.flat().length && (
                      <TabBar
                        compnentsPerScreen={componentsPerScreen}
                        paths={paths}
                        pathname={location.pathname}
                      >
                        {tabs.props.children.slice(0)}
                      </TabBar>
                    )}
                  </>
                );
              }}
            />
          ))}
        </Switch>
      </ViewPort>
    </ThemeProvider>
  );
};

ResponsiveReactApp.defaultProps = {
  children: [],
  paths: []
};

export default ResponsiveReactApp;
