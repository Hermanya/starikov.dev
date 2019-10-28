---
path: "/reviews/theming-styled-components-in-2019-part-2"
created: "2019-06-14"
updated: "2019-06-21"
title: "Theming Styled Components in 2019 (Part 2)"
description: "What are the options to make your styled-components more flexible"
discuss_on_github: "https://github.com/Hermanya/hermanya.github.io/issues/3"
discuss_on_spectrum: "https://spectrum.chat/styled-components/general/theming-styled-components-in-2019~7daabb53-dcb6-4255-b68d-02e920011e45"
discuss_on_reddit: "https://www.reddit.com/r/reactjs/comments/c3jqyj/theming_styled_components_in_2019/"
---

This is a continuation of my previous blog post on this subject. [Check out Part 1](/reviews/theming-styled-components-in-2019) if you have not seen it yet.

## Xstyled

[Xstyled] solves the `${props => props.theme.primary}` verbosity problem in a different way:

```js
import styled from 
  '@xstyled/styled-components'

const BrandLink = styled.a`
  color: primary;
`;
```


Where `primary` automatically resolves to `theme.colors.primary`. Nice! 

While this project has got a lot of positive feedback, it's very new and there is a lot of room for improvement. In particular, there is one [Pull Request][$xstyled] that proposes to use a `$` character as an indicator for variables, SASS style. This would come in useful in ambiguous situations such as `margin: 2;`, where it's not clear whether this is going to resolve to `2px` or `theme.space.2`.

It's interesting that Xstyled started out as a [PR to Styled System](https://github.com/styled-system/styled-system/pull/479), but it grew into something more.


## Theme UI

Not very long after Xstyled came out, Brent Jackson showed the world Theme UI.

It's a theming solution for React apps built with MDX + Emotion + Styled System + Typography.js. Keep in mind that Styled Components are very similar to Emotion, which is why I'm including Theme UI in this post.

```jsx
import { 
  ThemeProvider, Styled 
} from 'theme-ui'

const theme = {
  colors: {
    primary: "palevioletred"
  },
  styles: {
    a: {
      color: 'primary'
    }
  }
}

const BrandLink = Styled.a

export default () =>
  <ThemeProvider theme={theme}>
    <BrandLink href="#">
      Hello
    </BrandLink>
  </ThemeProvider>
```


The Key differentiation to me is the integration with MDX, a markdown flavor with support for `jsx`. This is great! I've considered using MDX on my blog, and at the time I thought it might be an overkill. But now I need global CSS to style links in my posts. With Theme UI _my content_ would automatically pick up styling from the theme.

## CSS variables

Last but not least, you can always use CSS variables. People like to make fun of the #useThePlatform movement, but I think in this case it's a very reasonable option. The browser support is very much here. This is the most truly dynamic theming approach. You can change variables using media queries, including `prefers-color-scheme`. Meaning, supporting dark mode is super easy, no js required.

Anyway, here is the same example of a `BrandLink`:

```css
:root {
  --primary-color: palevioletred;
}
```

Note, that for CSS variables you don't need a `ThemeProvider`, the theme can be scoped using HTML/CSS scoping mechanisms.

```js
import styled 
  from 'styled-components'

const BrandLink = styled.a`
  color: var(--primary-color);
`;
```

I would love to see an initiative similar to [System UI][] but based on CSS variables. How amazing would it be, if there was [Stylish] but based on CSS variables? Super amazing 🤔

## Summary

I hope you found this review useful and maybe even learned a thing or two. Let me know if there is a theming approach for styled components that escaped my radar. I'm very excited about the future of frontend, and I'm looking forward to CSS-in-JS taking over the world and whatever comes next.

---

[Xstyled]: https://github.com/smooth-code/xstyled
[$xstyled]: https://github.com/smooth-code/xstyled/issues/6
[System UI]: https://system-ui.com/theme
[Stylish]: https://userstyles.org/
