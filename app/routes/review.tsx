import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { c } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import { Page } from "~/components/App";

export const meta: MetaFunction = () => {
  let [searchParams, _] = useSearchParams();

  switch (searchParams.get("p")) {
    case "how":
      return [
        { title: "First Steps - VISCON" },
        { name: "description", content: "How to use Remix." }
      ];
    case "what":
      return [
        { title: "React Framework - VISCON" },
        { name: "description", content: "A framework built by devs for devs." }
      ];
    case "why":
      return [
        { title: "Who Cares? - VISCON" },
        { name: "description", content: "Why should you care?" }
      ];
  }

  return [
    { title: " - VISCON" },
    { name: "description", content: "Remix review." }
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  let params = new URL(request.url).searchParams;
  return {
    p: params.get("p")
  };
}

export default function () {
  let { p } = useLoaderData<typeof loader>();
  return (
    <Page>
      <div className="grid grid-rows-2 gap-3">
        <div>I'm '{p}'</div>
      </div>
    </Page>
  );
}
