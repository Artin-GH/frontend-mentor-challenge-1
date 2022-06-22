import React from "react";
import Head from "next/head";
import { Footer, Navbar } from "../layouts/global";

export default function PageBase({
  children,
  ...otherProps
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <React.Fragment>
      <Head>
        <title>Project - X</title>
        <meta name="description" content="This is a Project - X" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Navbar />
      <main {...otherProps}>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
