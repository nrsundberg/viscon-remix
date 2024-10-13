import { Button, Tooltip } from "@nextui-org/react";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";

export async function loader({ params }: LoaderFunctionArgs) {
  return { layout: params.layout };
}

export default function () {
  let { layout } = useLoaderData<typeof loader>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  const codeString = `
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
  return (
    <div className="border-red-500 border-2 w-full h-full p-4">
      <h2>Oh snap!</h2>
      <p>This route threw an error!</p>
    </div>
  );
}
`;

  return (
    <div className="flex flex-col gap-2 ">
      <div>
        <p>Hello, my route parameter is: '{layout}'</p>

        <Tooltip
          color="success"
          content="Don't forget to talk about scroll restoration!"
        >
          <Button
            className="mt-2 mr-2"
            color="success"
            as={Link}
            to={"example"}
          >
            Go to example
          </Button>
        </Tooltip>

        <Button color="danger" as={Link} to={"error"}>
          Go to error
        </Button>

        <pre className="language-ts w-fit">
          <code className="language-ts">{codeString}</code>
        </pre>
      </div>

      <Outlet />
    </div>
  );
}
