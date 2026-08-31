import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from "react-router";
import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';

/**
 * Root layout component that wraps all pages with consistent header and footer.
 *
 * To customize the header or footer, directly edit the Header.tsx and Footer.tsx
 * files in the layouts/parts directory.
 *
 * Site-wide <title> and <meta> live in the <Helmet> below. Individual pages can
 * override them by rendering their own <Helmet> — last-mounted wins.
 */
interface RootLayoutProps {
  children: ReactElement;
}
export default function RootLayout({
  children
}: RootLayoutProps) {
  return <Website>
      <Helmet>
        <title>Aptech Learning Whitefield | Best IT Training Institute in Whitefield Bangalore</title>
        <meta name="description" content="Join Aptech Learning Whitefield for industry-ready courses in AI, Data Science, Python, Full Stack Development and more. Authorized Aptech franchise in Whitefield, Bangalore. Book free career counselling today." />
        <meta name="keywords" content="Aptech Learning Whitefield, Computer Training Institute Whitefield, Best IT Training Institute Whitefield, AI Course Whitefield, Data Science Course Whitefield, Python Training Whitefield, Corporate IT Training Bangalore, Power BI Course Whitefield" />
        <meta property="og:site_name" content="Aptech Learning Whitefield" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ScrollRestoration />
      <Header />
      {children}
      <Footer />
    </Website>;
}
