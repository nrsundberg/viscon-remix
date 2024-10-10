import {Page} from "~/components/App";
import {Button} from "@nextui-org/react";
import type {MetaFunction} from "@remix-run/node";
import {SiPrisma, SiSupabase, SiTailwindcss, SiVercel} from "react-icons/si";
import {FaFly} from "react-icons/fa";
import {Link} from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        { title: "Deployment Stack - VISCON" },
        { name: "description", content: "Different companies who work well with the Remix stack." },
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
                        <SiSupabase size={30}/>
                    </Button>
                    <p>Supabase - Database Hosting</p>
                </div>

                <div className="flex gap-2">
                    <Button
                        isIconOnly
                        as={Link}
                        to={"https://vercel.com/pricing"}>
                        <SiVercel size={30}/>
                    </Button>
                    <p>Vercel - Page Hosting & CI/CD</p>
                </div>
                <div className="flex gap-2">
                    <Button
                        isIconOnly
                        color={"secondary"}
                        as={Link}
                        to={"https://fly.io/pricing/"}
                    >
                        <FaFly size={30}/>
                    </Button>
                    <p>Fly.io - Page Hosting & CI/CD</p>
                </div>

                <div className="flex gap-2">
                    <Button
                        isIconOnly
                        color="primary"
                        as={Link}
                        to={"https://www.prisma.io/pricing"}
                    >
                        <SiPrisma size={30}/>
                    </Button>
                    <p>Prisma - ORM and DB Events</p>
                </div>

                <div className="flex gap-2">
                    <Button
                        isIconOnly
                        color="primary"
                        as={Link}
                        to={"https://tailwindcss.com/"}
                    >
                        <SiTailwindcss size={30}/>
                    </Button>
                    <p>Tailwind - Inline Production CSS</p>
                </div>

            </div>
        </Page>
    )
}