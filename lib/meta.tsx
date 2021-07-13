import Head from "next/head";
import React from "react";

export const Meta = ({ title }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@500&display=swap"
      rel="stylesheet"
    />

    <title>{title} | Automotive-Redesign-Page</title>
  </Head>
);
