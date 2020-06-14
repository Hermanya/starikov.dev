import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --blue: #2196F3;
    --gray: #9E9E9E;
    --gray2: #BDBDBD;
    --gray3: #E0E0E0;
    --gray4: #EEEEEE;
    --gray5: #F5F5F5;
    --gray6: #FAFAFA;
    --green: #4CAF50;
    --indigo: #3F51B5;
    --orange: #FF9800;
    --pink: #E91E63;
    --purple: #9C27B0;
    --red: #F44336;
    --cyan: #00BCD4;
    --yellow: #FFEB3B;
    --text: #212121;
    --background: #fff;
    --card-background: #fff;
    --react: #61dafb;
    --card-border-radius: 4px;
    --card-border:  1px solid var(--gray3);
    /* --card-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); */
    --divider: var(--gray4);


}
@media (prefers-color-scheme: dark) {
    :root {
        --blue: #42A5F5;
        --gray: #9E9E9E;
        --gray2: #757575;
        --gray3: #616161;
        --gray4: #424242;
        --gray5: #212121;
        --gray6: #111111;
        --green: #66BB6A;
        --indigo: #5C6BC0;
        --orange: #FFA726;
        --pink: #EC407A;
        --purple: #AB47BC;
        --red: #EF5350;
        --cyan: #26C6DA;
        --yellow: #FFEE58;
        --text: rgb(204, 204, 204);
        --background: #000;
        /* --card-background: #35363a; */
        --card-background: #000;
        --react: #61dafb;
    }
}



@font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Roboto"), local("Roboto-Regular"),
        url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2)
        format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
    font-family: "Roboto", monospace;
}

`;
