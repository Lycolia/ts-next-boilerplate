import type { AppProps /*, AppContext */ } from 'next/app';
import './_app.scss';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
