import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Page } from "~/components/App";

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
