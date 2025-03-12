import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Get the base path from environment variables or default to empty string
  const basePath = process.env.GITHUB_ACTIONS === 'true' ? '/mcpsx-web' : '';

  return (
    <Html lang="en">
      <Head>
        {/* Use explicit base path for static assets */}
        <base href={basePath} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}