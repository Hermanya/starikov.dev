import { createGlobalStyle } from "styled-components";

// https://design.firefox.com/photon/

export default createGlobalStyle`
:root {
    --blue: #0a84ff;
    --gray: #9E9E9E;
    --gray2: #BDBDBD;
    --gray3: #E0E0E0;
    --gray4: #EEEEEE;
    --gray5: #F5F5F5;
    --gray6: #FAFAFA;
    
    --green: #12bc00;
    --indigo: #3F51B5;
    --orange: #d76e00;
    --pink: #E91E63;
    --purple: #9400ff;
    --red: #d70022;
    --cyan: #00BCD4;
    --yellow: #ffe900;
    
    --text: #212121;
    --background: #f2f2f7;
    
    --react: #61dafb;

    --card-background: #fff;
    --card-border-radius: 3px;
    --card-shadow: rgba(12, 12, 13, 0.1) 0 1px 4px 0;
    --divider: var(--gray3);


}
@media (prefers-color-scheme: dark) {
    :root {
        --blue: #45a1ff;
        --gray: #9E9E9E;
        --gray2: #757575;
        --gray3: #616161;
        --gray4: #424242;
        --gray5: #212121;
        --gray6: #111111;
        --green: #66BB6A;
        --indigo: #5C6BC0;
        --orange: #ff9400;
        --pink: #EC407A;
        --purple: #ad3bff;
        --red: #ff0039;
        --cyan: #26C6DA;
        --yellow: #FFEB3B;
        --text: rgb(204, 204, 204);
        --background: #000;
        --card-background: #313236;
        --react: #61dafb;
    }
}


@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
    font-family: "Fira Sans", monospace;
}
`;
