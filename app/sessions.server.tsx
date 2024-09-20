// sessions.server.tsx

import { createThemeSessionResolver } from "remix-themes";
import { createCookieSessionStorage } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix-themes",
    domain: "localhost",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    maxAge: 60 * 60 * 24 * 14, // 2 weeks in seconds
    // secure: true,
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
