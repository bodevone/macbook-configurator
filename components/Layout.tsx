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
    <header>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>&copy; 2024 MacBook Configurator</p>
    </footer>
  </>
);

export default Layout;