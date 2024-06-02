import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>MacBook Pro Configurator</title>
      <meta name="description" content="Configure your MacBook Pro" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>{children}</main>
  </>
);

export default Layout;