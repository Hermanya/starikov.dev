import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --blue: rgb(0, 122, 255);
    --gray: rgb(142, 142, 147);
    --gray2: rgb(174, 174, 178);
    --gray3: rgb(199, 199, 204);
    --gray4: rgb(209, 209, 214);
    --gray5: rgb(229, 229, 234);
    --gray6: rgb(242, 242, 247);
    --green: rgb(52, 199, 89);
    --indigo: rgb(88, 86, 214);
    --orange: rgb(255, 149, 0);
    --pink: rgb(255, 45, 85);
    --purple: rgb(175, 82, 222);
    --red: rgb(255, 59, 48);
    --cyan: rgb(90, 200, 250);
    --yellow: rgb(255, 204, 0);
    --text: rgb(51, 51, 51);
    --background: #f2f2f7;
    --card-background: #fff;
    --react: #61dafb;
    --card-border-radius: 12px;
    --divider: var(--gray5);
}
@media (prefers-color-scheme: dark) {
    :root {
        --blue: rgb(10, 132, 255);
        --gray: rgb(142, 142, 147);
        --gray2: rgb(99, 99, 102);
        --gray3: rgb(72, 72, 74);
        --gray4: rgb(58, 58, 60);
        --gray5: rgb(44, 44, 46);
        --gray6: rgb(28, 28, 30);
        --green: rgb(48, 209, 88);
        --indigo: rgb(94, 92, 230);
        --orange: rgb(255, 159, 10);
        --pink: rgb(255, 55, 95);
        --purple: rgb(191, 90, 242);
        --red: rgb(255, 69, 58);
        --cyan: rgb(100, 210, 255);
        --yellow: rgb(255, 214, 10);
        --text: rgb(204, 204, 204);
        --background: #000;
        --card-background: #1c1c1e;
        --react: #61dafb;
    }
}



@font-face {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-display: swap;

    src: local("☺︎"),
        url("https://rawcdn.githack.com/dreadlocked/dreadlocked.github.io/71ced0ad7e61ff44fef50c5189972935bd6ca4c6/assets/sf-pro-text_regular.woff2")
        format("woff2");
}

@font-face {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: local("☺︎"),
        url("https://rawcdn.githack.com/dreadlocked/dreadlocked.github.io/71ced0ad7e61ff44fef50c5189972935bd6ca4c6/assets/sf-pro-display_semibold.woff2")
        format("woff2");
}

h1, h2, h3, h4, h5, h6 {
    font-family: "SF Pro Display", monospace;
}

body {
    font-family: "SF Pro Text", monospace;
}
`;
