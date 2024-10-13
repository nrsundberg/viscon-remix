import type { MetaFunction } from "@remix-run/node";
import { Page } from "~/components/App";
import { TextWrapper } from "~/utils/ComponentUtils";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Intro - VISCON" },
    { name: "description", content: "Welcome to our Remix intro!" }
  ];
};

export default function Index() {
  return (
    <Page>
      <TextWrapper>
        Welcome to my VISCON Remix intro! This is a simple page to show off some
        of the features of Remix. My goal for this presentation is to show you
        the benfits and why you might reach for Remix (React Router) the next
        time you are starting a project!
      </TextWrapper>
    </Page>
  );
}
