import { Page } from "~/components/App";
import { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";

export const meta: MetaFunction = () => {
  return [
    { title: "The Goat... Loaders - VISCON" },
    { name: "description", content: "Couple example loader functions" }
  ];
};

export default function () {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  const codeString = `  import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
  import { Page } from "~/components/Page";
  import { prisma } from "~/db.server";
  import { Space, Status } from "@prisma/client";
  
  export async function loader({ request }: LoaderFunctionArgs) {
    const filterRooms = new URL(request.url).searchParams.get("room");
    const roomFilter = () => {
      if (filterRooms) {
        return { homeRoom: { in: filterRooms.split(",") } };
      }
      return {};
    };

    return {
      spaces: await prisma.space.findMany({ orderBy: { spaceNumber: "asc" } }),
      homeRooms: await prisma.teacher.findMany({ orderBy: { homeRoom: "asc" } }),

      recentCars: await prisma.student.findMany({
        where: {
          homeRoom: { in: filterRooms?.split(",") },
          space: { status: Status.ACTIVE }
        },
        orderBy: {
          space: {
            timestamp: "desc"
          }
        },
        take: 20
      })
    };
  }`;

  return (
    <Page>
      <div className="grid grid-cols-[1fr_2fr] gap-3">
        <pre className="language-ts">
          <code className="language-ts">{codeString}</code>
        </pre>
        <iframe
          className="h-full w-full"
          src="https://tome-bingo.fly.dev"
          title="Tome Bingo"
        ></iframe>
      </div>
    </Page>
  );
}
