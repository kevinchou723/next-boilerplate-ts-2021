import NextHead from 'next/head';

import type { HeadProps } from '../types/components/head.d';

export const Head = ({
  title,
  description,
  image,
  url,
  siteName,
  twitterHandle,
}: HeadProps) => (
  <NextHead>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />

    <title>{title}</title>
    <meta name="description" content={description} />

    <meta property="og:title" content={title} key="ogtitle" />
    <meta property="og:description" content={description} key="ogdesc" />
    <meta property="og:image" content={image} key="ogimage" />
    <meta property="og:url" content={url} key="ogurl" />
    <meta property="og:site_name" content={siteName} key="ogsitename" />

    {twitterHandle && (
      <meta name="twitter:card" content="summary" key="twcard" />
    )}
    {twitterHandle && (
      <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
    )}
  </NextHead>
);
