import {Page} from "~/components/App";
import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Developer X - VISCON" },
        { name: "description", content: "Talking about the developer experience with Remix!" },
    ];
};

export default function () {
    return (
        <Page>
            Todoplz
        </Page>
    )
}