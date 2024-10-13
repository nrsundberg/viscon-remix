import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.error === "error") {
    throw new Error("This is a test error");
  }
  return { error: false };
}
export default function ErrorBoundaryComponent() {
  let data = useLoaderData();
  return (
    <div className="border-green-500 border-2 w-full h-full p-4">
      I am a route showing you the data you could render in this outlet.
    </div>
  );
}

export function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return (
    <div className="border-red-500 border-2 w-full h-full p-4">
      <h2>Oh snap!</h2>
      <p>This route threw an error!</p>
    </div>
  );
}
