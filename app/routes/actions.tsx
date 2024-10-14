import { Page } from "~/components/App";
import { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript.js";
import { Link } from "@remix-run/react";
import { Divider } from "@nextui-org/react";

export const meta: MetaFunction = () => {
  return [
    { title: "We'll Make It, I Swear - VISCON" },
    {
      name: "description",
      content: "What are actions and why are they so usefull?"
    }
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

  const codeString2 = `// this serves to create the initial Chat in the db
export async function action({ request, params }: ActionFunctionArgs) {
  let formData = await request.formData();
  try {
    // Normal case is submission through form
    // Retry case is through button
    switch (formData.get("promptType")?.toString()) {
      case "normal":
        let prompt = formData.get("prompt")?.toString();
        const errors = {};

        invariant(prompt, "must include prompt");
        invariant(params.threadId, "must include threadId");

        await prisma.thread.update({
          where: { id: parseInt(params.threadId) },
          data: {
            lastUpdate: new Date()
          }
        });

        let tempChat = await prisma.chats.create({
          data: {
            prompt: prompt,
            response: null, // since response is null, it will be caught as an "unfinished chat" by the loader
            createdDateTime: new Date().toLocaleString(),
            score: 0,
            threadId: parseInt(params.threadId)
          }
        });
        let newChatId = tempChat.id;

        return json({ chatId: newChatId });
      case "retry":
        invariant(params.threadId, "must include threadId");

        const chatId = Number(formData.get("chatId"));

        // Update past responses field in db
        const chat = await prisma.chats.findUniqueOrThrow({
          where: { id: chatId }
        });

        let tempChat2 = await prisma.chats.create({
          data: {
            prompt: chat.prompt,
            response: null, // since response is null, it will be caught as an "unfinished chat" by the loader
            retriedChatId: chat.retriedChatId ?? chat.id,
            createdDateTime: new Date().toLocaleString(),
            score: 0,
            threadId: parseInt(params.threadId),
            isProcessing: false
          }
        });

        let oldChat = await prisma.chats.update({
          where: { id: chat.id },
          data: { isActive: false }
        });
        return json({ chatId: tempChat2.id });
    }
  } catch (e) {
    console.error("Error: ", e);
  }
  return null;
}
`;

  return (
    <Page>
      <div className="flex-col">
        <p className="text-2xl w-[1200px]">
          As we went over how to get the data (in{" "}
          <Link className="text-blue-500 underline" to={"/loaders"}>
            loaders
          </Link>
          ) for Tome School, now we need to be able to update it.
        </p>
        <pre className="language-ts w-fit">
          <code className="language-ts">{codeString}</code>
        </pre>
        <Divider className="my-4" />
        <p className="text-2xl w-[1200px]">
          Here we have an action to create a chat in JimBot. <br /> It's also
          worth noting you could swtich case on the HTTP method as well.
          <ol className="ml-4 list-disc list-inside text-lg">
            <ul>PATCH</ul>
            <ul>GET</ul>
            <ul>DELETE</ul>
            <ul>etc..</ul>
          </ol>
        </p>
        <pre className="language-ts w-fit">
          <code className="language-ts">{codeString2}</code>
        </pre>
      </div>
    </Page>
  );
}
