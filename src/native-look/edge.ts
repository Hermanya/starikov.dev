import { createGlobalStyle } from "styled-components";

//developer.microsoft.com/en-us/fluentui#/styles/web/colors/shared

export default createGlobalStyle`
:root {
    --blue: rgb(37, 142, 222);
    --gray: #9E9E9E;
    --gray2: #BDBDBD;
    --gray3: #E0E0E0;
    --gray4: #EEEEEE;
    --gray5: #F5F5F5;
    --gray6: #FAFAFA;
    --green: #498205;
    --indigo: #3F51B5;
    --orange: #FF9800;
    --pink: #E91E63;
    --purple: #881798;
    --red: #a4262c;
    --cyan: #00BCD4;
    --yellow: #fce100;
    --text: #333434;
    --background: #F0F1F1;
    --card-background: #fff;
    --react: #61dafb;

    --card-border-radius: 6px;
    --card-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 2px 3px 0 rgba(0,0,0,.1);
    border-radius: 6px;

    --divider: #dddddd;
}
@media (prefers-color-scheme: dark) {
    :root {
        --blue: #0078d4;
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
        --purple: #c239b3;
        --red: #d13438;
        --cyan: #26C6DA;
        --yellow: #FFEE58;
        --text: rgb(204, 204, 204);
        --background: #000;
        --card-background: #313236;
        --react: #61dafb;

        --divider: var(--gray4);
    }
}



@font-face {
    font-family: "SegoeUI";
    font-display: swap;

    src: local("Segoe UI"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2")
        format("woff2"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff")
        format("woff"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf")
        format("truetype"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.svg#web")
        format("svg");
    font-weight: 400;
}


@font-face {
    font-family: "SegoeUI";
    font-display: swap;

    src: local("Segoe UI"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2")
        format("woff2"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff")
        format("woff"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf")
        format("truetype"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.svg#web")
        format("svg");
    font-weight: 500;
}


@font-face {
    font-family: "SegoeUI";
    font-display: swap;

    src: local("Segoe UI"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2")
        format("woff2"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff")
        format("woff"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf")
        format("truetype"),
        url("//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.svg#web")
        format("svg");
    font-weight: 700;
}

body {
    font-family: "SegoeUI", monospace;
}

`;
