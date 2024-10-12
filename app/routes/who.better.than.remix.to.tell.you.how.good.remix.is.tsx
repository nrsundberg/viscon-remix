import { NestedPage } from "~/components/App";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Ryan Knows Best - VISCON" },
    {
      name: "description",
      content: "To demonstrate they know what they are talking about..."
    }
  ];
};

export default function () {
  return (
    <NestedPage>
      <iframe
        src={"https://remix.run"}
        title="Remix Homepage"
        className="w-full h-[100lvh]"
      ></iframe>
    </NestedPage>
  );
}
