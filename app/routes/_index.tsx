import { Divider } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import Sidebar from "~/components/Sidebar";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";
import React from "react";
import {Page} from "~/components/App";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Intro - VISCON" },
    { name: "description", content: "Welcome to our Remix intro!" },
  ];
};

export default function Index() {
  return (
    <Page>
    </Page>
  );
}
