import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate
} from "@remix-run/react";
import "./tailwind.css";
import { NextUIProvider } from "@nextui-org/react";
import prismStyle from "prismjs/themes/prism-tomorrow.css?url";

export const links = () => [{ rel: "stylesheet", href: prismStyle }];

function App() {
  const navigate = useNavigate();

  return (
    <html lang="en" data-theme={"dark"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider navigate={navigate}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </NextUIProvider>
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return <App />;
}
