import { Divider } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import Sidebar from "~/components/Sidebar";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Intro - VISCON" },
    { name: "description", content: "Welcome to our Remix intro!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <div className="w-[100%] justify-between flex">
        <div className="grid grid-rows-2">
          <h1 className="text-3xl">Intro to Remix - a VISCON presentation</h1>
          <h4>
            Blazingly fast UI development with optimistic UI out-of-the-box
          </h4>
        </div>
        <ThemeSwitcher />
      </div>
      <Divider className="my-4" />
      <Sidebar />
    </div>
  );
}
