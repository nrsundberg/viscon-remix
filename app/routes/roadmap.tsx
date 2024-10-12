import { Page } from "~/components/App";
import type { MetaFunction } from "@remix-run/node";
import brooksPic from "~/images/react-router-remix-graphic.jpeg";
import spider from "~/images/remix-react-router-spider-man.png";
import { Link } from "@remix-run/react";
import { BodyTextWrapper, TextWrapper } from "~/utils/ComponentUtils";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Roadmap - VISCON" },
    { name: "description", content: "Is Remix gone forever?" }
  ];
};

export default function () {
  return (
    <Page>
      <div className="grid grid-rows-2 gap-10 w-full justify-around text-center">
        <div className="flex flex-col w-full items-center">
          <TextWrapper>Where is Remix going?</TextWrapper>
          <BodyTextWrapper className="px-52">
            Remix has effectively been a rooftop deck with a sunroom, patio
            furniture, and a sick audio system built on top of React Router.
            <br /> As React Router added Remix specfic APIs like loaders and
            actions; the difference between Remix and RR got smaller.
          </BodyTextWrapper>
          <img height={400} width={1200} src={spider} alt={"Spider-man meme"} />
          <p>
            Credit:{" "}
            <Link
              to={"https://x.com/BrooksLybrand"}
              className="text-blue-500 underline"
            >
              Brooks Lybrand
            </Link>
          </p>
        </div>

        <div className="flex flex-col w-full items-center">
          <BodyTextWrapper className="px-52">
            As of the release of React Router v7, the difference is only the
            change of imports.
            <br />
            <br /> Does this mean Remix is gone forever?
            <br /> <br /> No, Remix is still a great way to build React
            applications and they are working to add some great new features (to
            be announced).
          </BodyTextWrapper>
          <img
            height={400}
            width={1200}
            src={brooksPic}
            alt={"React and Remix combination graphic"}
          />
          <p>
            Credit:{" "}
            <Link
              to={"https://x.com/jacobmparis?lang=en"}
              className="text-blue-500 underline"
            >
              Jacob Paris
            </Link>
          </p>
        </div>
      </div>
    </Page>
  );
}
