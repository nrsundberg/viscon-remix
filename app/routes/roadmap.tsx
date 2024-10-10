import {Page} from "~/components/App";
import type {MetaFunction} from "@remix-run/node";
import brooksPic from "../images/react-router-remix-graphix.jpg";
import spider from "../images/remix-react-router-spider-man.png";


export const meta: MetaFunction = () => {
    return [
        { title: "Where is it going? - VISCON" },
        { name: "description", content: "Is Remix gone forever?" },
    ];
};

export default function () {
    return (
        <Page>
            <img
                src={brooksPic}
                alt={"React and Remix combination graphic"}
            />

            <img
                src={spider}
                alt={"Spider-man meme"}
            />
        </Page>
    )
}