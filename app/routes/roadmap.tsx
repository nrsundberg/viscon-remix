import { Page } from "~/components/App";
import type { MetaFunction } from "@remix-run/node";
import brooksPic from "~/images/react-router-remix-graphic.jpeg";
import spider from "~/images/remix-react-router-spider-man.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Where is it going? - VISCON" },
    { name: "description", content: "Is Remix gone forever?" }
  ];
};

export default function () {
  return (
    <Page>
      <div className="grid grid-rows-2 gap-10">
        <div>
          <img src={brooksPic} alt={"React and Remix combination graphic"} />
        </div>

        <div>
          <img height={400} width={1000} src={spider} alt={"Spider-man meme"} />
          <p>Credit: Brooks Lybrand</p>
        </div>
      </div>
    </Page>
  );
}
