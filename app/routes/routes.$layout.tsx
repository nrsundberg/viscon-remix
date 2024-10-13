import { Button } from "@nextui-org/react";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  return { layout: params.layout };
}

export default function () {
  let { layout } = useLoaderData<typeof loader>();

  return (
    <div className="grid grid-rows-2 gap-2 h-[50lvh] w-[300px]">
      <div>
        <p>Hello, '{layout}'</p>

        <Button className="mt-2 mr-2" color="primary" as={Link} to={"example"}>
          Go to example
        </Button>

        <Button color="danger" as={Link} to={"error"}>
          Go to error
        </Button>
      </div>

      <Outlet />
    </div>
  );
}
