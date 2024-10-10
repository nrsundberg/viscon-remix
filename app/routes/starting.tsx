import type { MetaFunction } from "@remix-run/node";
import { Button } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { SiSupabase } from "react-icons/si";
import { Page } from "~/components/App";

export const meta: MetaFunction = () => {
  return [
    { title: "Start Project - VISCON" },
    {
      name: "description",
      content: "What does it look like to start a project using Remix?"
    }
  ];
};

export default function () {
  return (
    <Page>
      <div className={"flex flex-col gap-10"}>
        <div className="flex gap-2">
          <Button
            isIconOnly
            color="success"
            as={Link}
            to={"https://supabase.com/pricing"}
          >
            <SiSupabase size={30} />
          </Button>
          <p>Supabase - Database Hosting</p>
        </div>
      </div>
    </Page>
  );
}
