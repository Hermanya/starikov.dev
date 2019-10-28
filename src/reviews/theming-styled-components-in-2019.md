---
path: "/reviews/theming-styled-components-in-2019"
created: "2019-06-14"
updated: "2019-06-21"
title: "Theming Styled Components in 2019"
description: "What are the options to make your styled-components more flexible"
discuss_on_github: "https://github.com/Hermanya/hermanya.github.io/issues/3"
discuss_on_spectrum: "https://spectrum.chat/styled-components/general/theming-styled-components-in-2019~7daabb53-dcb6-4255-b68d-02e920011e45"
discuss_on_reddit: "https://www.reddit.com/r/reactjs/comments/c3jqyj/theming_styled_components_in_2019/"
---

[CSS-in-JS is on the rise][npm-trends]! So far [Styled Components] is leading this movement. This CSS-in-JS library lets you use the best bits of ES6 and CSS to style your apps. I have been using styled-components on various projects at 2 different jobs for about a year now. In this post, I will go over the theming approaches I have seen, and new libraries that came out as recently as June 2019. I will go over what styled-components are and 5 different ways to make them more re-usable and customizable.

## Basics

In Styled Components there are 2 ways to apply CSS to HTML elements:

```js
// Either
const BrandLink = styled.a`
  color: palevioletred;
`
// Or
const BrandLink = styled('a')`
  color: palevioletred;
`
```

This is a `BrandLink` React component which renders an `<a>` tag with pale violet-red text.

If I want to have another component that has the underline removed I can do this:

```js
const NavLink = styled(BrandLink)`
  text-decoration: none;
`
```

And that's pretty much all you need to know to get started with styled-components.

## Theming

[The recommended theming approach](sc-theming) is pretty simple. There is a `ThemeProvider` component that takes any javascript object and injects it as a prop into all styled components.

```jsx
import { ThemeProvider } 
  from 'styled-components'

const theme = { 
  primary: "mediumseagreen" 
}

export default () =>
  <ThemeProvider theme={theme}>
    <BrandLink href="#">
      Themed
    </BrandLink>
  </ThemeProvider>
```

Now you can get `mediumseagreen` by accessing `props.theme.primary` like so:

```js

const BrandLink = styled.a`
  color: ${props => 
    props.theme.primary};
`;
```

If you want your component to work without a `ThemeProvider`, you need to provide a default theme in React's `defaultProps`:

```js
BrandLink.defaultProps = {
  theme: {
    primary: "palevioletred"
  }
}
```

Alternatively, you can avoid using `ThemeProvider` altogether:

```js
import theme from 'theme';

const BrandLink = styled.a`
  color: ${theme.primary};
`;
```

This is easier to write because it's shorter and the chances are that autocomplete for theme properties is better. But then changing this theme in runtime becomes a challenge. You can, however, start with this and do a global replace for `theme.` to `props => props.theme.` later 😉 when you actually need a dynamic theme.

## Styled System

[Styled System] solves 3 problems I faced in styled-components.

1. Writing `${props => props.theme.primary}` all the time is kind of a drag
2. Lack of conventions around theme object struction (take a look at [System UI][])
3. Exposing styling-related props


```js
import styled 
  from 'styled-components'
import {color} 
  from 'styled-system'

const BrandLink = styled.a`
  ${color}
`;

BrandLink.defaultProps = {
  color: 'primary'
}
```

The `${color}` part adds 2 props to `BrandLink` 

1. `color` same as the CSS property, but it maps to `theme.colors`
2. `bg` which is short for `background` and it also maps to `theme.colors`

To consume this component wrap your app into a regular `ThemeProvider` and pass it a _theme that has a `colors` property_.

```jsx
import { 
  ThemeProvider 
} from 'styled-components'

const theme = { 
  colors: {
    primary: "mediumseagreen", 
    external: "blue" 
  }
}

export default () =>
  <ThemeProvider theme={theme}>
    <BrandLink>Themed</BrandLink>
    <BrandLink color="external">
      Link of another color
    </BrandLink>
  </ThemeProvider>
```

Truth be told, after using styled-system for awhile, I no longer like to mix style-related props with other props. But this does speed up development significantly.

In addition to that Styled Components v4 made it difficult to extend `defaultProps`. So `const NavLink = styled(BrandLink)...` may not actually work as you think should.

[Read more in Part 2](/reviews/theming-styled-components-in-2019-part-2)

---

[npm-trends]: https://www.npmtrends.com/styled-components-vs-emotion-vs-radium-vs-glamorous-vs-jss
[Styled Components]: https://www.styled-components.com
[sc-theming]: https://www.styled-components.com/docs/advanced#theming
[Styled System]: https://styled-system.com
