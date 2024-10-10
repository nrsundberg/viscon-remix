import {NestedPage, Page} from "~/components/App";

export default function() {
    return (
        <NestedPage>
            <iframe
                src={"https://remix.run"}
                title="Remix Homepage"
                className="w-full h-[100lvh]"
            ></iframe>
        </NestedPage>

    )
}