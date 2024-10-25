import Head from "next/head";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const PublicLayout: FC<PublicLayoutProps> = ({
  children = <></>,
  title = "Ritesh Pandey | Full Stack Web Developer",
  description = "Full stack Web developer passionate about creating web applications with a focus on user experience.",
  ogImage,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};
export default PublicLayout;

interface PublicLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  ogImage?: string;
}
