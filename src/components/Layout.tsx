import Head from 'next/head';

type LayoutProps = {
  title: string;
  children: JSX.Element;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.children}
    </>
  );
};

export default Layout;
