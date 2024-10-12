import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Page } from "~/components/App";

export async function loader({ params }: LoaderFunctionArgs) {
  return { layout: params.layout };
}

export default function () {
  let { layout } = useLoaderData<typeof loader>();

  return <p>Hello, '{layout}'</p>;
}
