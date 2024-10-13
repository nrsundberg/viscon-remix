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

  const codeString2 = `export const meta: MetaFunction = ({ params }) => {
  return [
    { title: 'Thread {params.threadId} - Jimbot' },
    { name: "description", content: "User homepage" }
  ];
};

//loads in new chat information for current thread
export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.threadId, "params.threadId is required");
  let currentThread = null;
  let user = await getUserInfoProtected(request);

  try {
    currentThread = await prisma.thread.findUniqueOrThrow({
      where: { id: parseInt(params.threadId), kindeId: user.id }
    });
  } catch {
    // Note: Loaders are server-side so user sees silent render with no info -- prob fine for our case
    console.error('ThreadId "{params.threadId}" doesnt exist');
    throw redirect("/home");
  }

  let allChats = await prisma.chats.findMany({
    where: { threadId: parseInt(params.threadId) }
  });

  // check if there are any chats that need a response or aren't finished generating their response
  let unfinishedChat = allChats.find(
    (chat) => (!chat.response && !chat.isProcessing) || chat.isProcessing
  );

  let unfinishedChatId = null;
  if (unfinishedChat != undefined) {
    unfinishedChatId = unfinishedChat.id;
  }

  let headers = new Headers();

  if (isPrefetch(request)) {
    headers.set("Cache-Control", "private, max-age=5, smax-age=0");
  }
  let chatHistory = await prisma.chats.findMany({
    where: { threadId: parseInt(params.threadId) },
    include: {
      sources: { include: { source: true } },
      responses: {
        include: { sources: { include: { source: true } } }
      }
    }
  });
  return json(
    {
      user: await getUserInfoProtected(request),
      threadId: parseInt(params.threadId),
      threadMode: currentThread.mode,
      chats: chatHistory,
      unfinishedChatId: unfinishedChatId
    },
    { headers }
  );
}`;
  return (
    <Page>
      <div className="flex-col">
        <pre className="language-ts">
          <code className="language-ts">{codeString}</code>
        </pre>

        <pre className="language-ts">
          <code className="language-ts">{codeString2}</code>
        </pre>
      </div>
    </Page>
  );
}
