import Head from 'next/head';

export function Meta() {
  return (
    <Head>
      <title>ihasabucket - instant web app hosting</title>
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/1502702/92998877-e9e1cc00-f51c-11ea-98e6-331460921cde.jpg"
      />
      <meta property="og:url" content="https://ihasabucket.it" />
      <meta
        property="og:title"
        content="I has a bucket - instant web app hosting"
      />
      <meta
        property="og:description"
        content="Guide for hosting React, Vue, Gatsby or user uploads on AWS S3 buckets"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Meta;
