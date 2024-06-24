import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import stylesheet from "~/tailwind.css";
import {
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => {
  const linksArray = [
    { rel: "stylesheet", href: stylesheet },
  ];

  if (cssBundleHref) {
    linksArray.push({ rel: "stylesheet", href: cssBundleHref });
  }

  return linksArray;
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {links().map((link, index) => (
          <link key={index} {...link} />
        ))}
      </head>
      <MantineProvider>
      <body className="tw-bg-secondary-200 tw-text-secondary-800">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
      </MantineProvider>
    </html>
  );
}
