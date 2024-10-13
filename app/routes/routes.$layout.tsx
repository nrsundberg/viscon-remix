import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Page } from "~/components/App";

export async function loader({ params }: LoaderFunctionArgs) {
  return { layout: params.layout };
}

export default function () {
  let { layout } = useLoaderData<typeof loader>();

  return (
    <div>
      <p>Hello, '{layout}'</p>
      <Outlet />
    </div>
  );
}
