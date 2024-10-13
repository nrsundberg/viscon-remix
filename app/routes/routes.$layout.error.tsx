import { Button } from "@nextui-org/react";
import {
  isRouteErrorResponse,
  useLoaderData,
  useRouteError
} from "@remix-run/react";

// export async function loader() {
//   throw new Error("This is a test error");
// }
export default function ErrorBoundaryComponent() {
  let data = useLoaderData();
  return <div className="border-white w-full h-full" />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="bg-white border border-black p-4">
        <h1>I am a caught nested error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
