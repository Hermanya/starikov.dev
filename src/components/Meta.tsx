import React from "react";
import { Helmet } from "react-helmet";

const siteMetadata = {
  title: "Herman Starikov",
  titleTemplate: "%s · Herman Starikov",
  description: "Software Developer @ Coursera",
  url: "https://www.starikov.dev",
  image: "/logo512.png",
  twitterUsername: "@hermanhasawish"
};

const locales: any = {
  en: "en_US"
};
const basePath = siteMetadata.url;

const Meta = (data: any) => {
  const lang = data.lang || "en";
  const title = data.title;
  const description = data.description;
  const image = data.image !== undefined && `${basePath}${data.image}`;
  const canonical =
    data.canonical !== undefined && `${basePath}${data.canonical}`;
  const type = data.type === undefined ? "article" : "website";
  const width = data.image && (data.width || 1200);
  const height = data.image && (data.height || 630);

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {image ? <link rel="image_src" href={image} /> : null}
      {image ? (
        <meta
          // itemprop="image"
          content={image}
        />
      ) : null}

      <meta property="og:site_name" content="..." />
      <meta property="og:title" content={title} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:locale" content={locales[lang]} />
      <meta property="og:type" content={type} />
      {image ? <meta property="og:image" content={image} /> : null}
      {width ? <meta property="og:image:width" content={width} /> : null}
      {height ? <meta property="og:image:height" content={height} /> : null}
      <meta property="fb:pages" content="..." />

      {/* change type of twitter if there is no image? */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      {image ? <meta name="twitter:image" content={image} /> : null}
      <meta name="twitter:site" content="@..." />
      {canonical ? (
        <link
          rel="alternate"
          href={`${basePath}${data.canonical}`}
          // hreflang={lang}
        />
      ) : null}
      {/* {canonical ? (
        <link
          rel="alternate"
          href={`${basePath}${alternatePathname}`}
          // hreflang={alternateLang}
        />
      ) : null} */}
    </Helmet>
  );
};

export default Meta;
