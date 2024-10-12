import { Page } from "~/components/App";
import { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";

export const meta: MetaFunction = () => {
  return [
    { title: "Route Modules - VISCON" },
    { name: "description", content: "Is Remix gone forever?" }
  ];
};

export default function () {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  const codeString = `import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { prisma } from "~/db.server";
import { Status } from "@prisma/client";
import { redirectWithError, jsonWithSuccess } from "~/utils/ToastUtils";

export async function action({ params }: ActionFunctionArgs) {
  const { space } = params;
  if (space === undefined) {
    redirectWithError("/", "No space provided");
  } else {
    const spaceNumber = parseInt(space);
    try {
      prisma.space.update({
        where: { id: spaceNumber },
        data: {
          status: Status.ACTIVE,
          timestamp: new Date().toLocaleString()
        }
      });
      return jsonWithSuccess("Space Filled");
    } catch (error) {
     return redirectWithError("Space not filled", error);
    }
  }
}`;

  return (
    <Page>
      <pre className="language-ts">
        <code className="language-ts">{codeString}</code>
      </pre>
    </Page>
  );
}
