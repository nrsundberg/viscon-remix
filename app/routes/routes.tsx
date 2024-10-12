import { Page } from "~/components/App";
import type { MetaFunction } from "@remix-run/node";
import brooksPic from "~/images/DotRoutes.png";
import spider from "~/images/dynamicSegments.png";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Route Modules - VISCON" },
    { name: "description", content: "Is Remix gone forever?" }
  ];
};

export default function () {
  return (
    <Page>
      <div className="grid grid-rows-2 gap-3">
        <div>
          <img src={brooksPic} alt={"React and Remix combination graphic"} />
        </div>

        <div>
          <img height={400} width={1000} src={spider} alt={"Spider-man meme"} />
        </div>
      </div>
      <Outlet />
    </Page>
  );
}
