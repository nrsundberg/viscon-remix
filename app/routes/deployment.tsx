import { Page } from "~/components/App";
import { Button } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { SiPrisma, SiSupabase, SiTailwindcss } from "react-icons/si";
import { FaFly } from "react-icons/fa";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Deployment Stack - VISCON" },
    {
      name: "description",
      content: "Different companies who work well with the Remix stack."
    }
  ];
};

export default function () {
  return (
    <Page>
      <div className={"flex flex-col gap-20"}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Button
              isIconOnly
              size="lg"
              color="success"
              as={Link}
              to={"https://supabase.com/pricing"}
            >
              <SiSupabase size={40} />
            </Button>
            <div>
              <h2 className="text-3xl font-bold">Supabase</h2>
              <p className="text-xl">
                Database hosting service offering an open-source Firebase
                alternative. Provides real-time data handling, authentication,
                and easy integration.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              isIconOnly
              color={"secondary"}
              as={Link}
              to={"https://fly.io/pricing/"}
            >
              <FaFly size={40} />
            </Button>
            <div>
              <h2 className="text-3xl font-bold">Fly.io</h2>
              <p className="text-xl">
                Page hosting and CI/CD provider focused on globally distributed
                applications. Supports deploying Dockerized applications closer
                to users.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              isIconOnly
              color="primary"
              as={Link}
              to={"https://www.prisma.io/pricing"}
            >
              <SiPrisma size={40} />
            </Button>
            <div>
              <h2 className="text-3xl font-bold">Prisma</h2>
              <p className="text-xl">
                ORM and database events tool for TypeScript and JavaScript.
                Simplifies database access and management through an intuitive
                type-safe API.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              isIconOnly
              color="primary"
              as={Link}
              to={"https://tailwindcss.com/"}
            >
              <SiTailwindcss size={40} />
            </Button>
            <div>
              <h2 className="text-3xl font-bold">Tailwind CSS</h2>
              <p className="text-xl">
                Utility-first CSS framework for rapidly building custom designs.
                Offers easy, maintainable styling without leaving your markup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
