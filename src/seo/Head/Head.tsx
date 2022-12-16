import NextHead from 'next/head';
import React from 'react';

import { GoogleAnalytics } from '../GoogleAnalytics/GoogleAnalytics';

export interface HeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export const Head = (props: HeadProps) => {
  const {
    ogImage = 'https://none.jpg',
    title = 'Portfolio 2022',
    description = 'Shader',
  } = props;

  return (
    <NextHead>
      <title>{`Shader - ${title}`}</title>
      <link
        rel="icon"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Shader - ${title}`} />
    

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <GoogleAnalytics />
    </NextHead>
  );
};
