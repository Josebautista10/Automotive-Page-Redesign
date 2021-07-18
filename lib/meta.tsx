import Head from "next/head";
import React from "react";
import { NextSeo } from 'next-seo';

export const Meta = ({ title }) => {
    return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@500&display=swap"
      rel="stylesheet"
    />

    <title>{title} | Automotive-Redesign-Page</title>
  </Head>
  <NextSeo
      title={title}
      description="This example uses more of the available config options." />
  </>
)};
