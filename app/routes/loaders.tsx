import type { MetaFunction } from "@remix-run/node";
import { Page } from "~/components/App";
import brooksPic from "~/images/loader.png";

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
      </div>
    </Page>
  );
}
