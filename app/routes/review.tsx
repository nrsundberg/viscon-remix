import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { c } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import {
  FaBolt,
  FaChartLine,
  FaGift,
  FaHeart,
  FaLeaf,
  FaRocket,
  FaSync,
  FaThumbsUp,
  FaTools
} from "react-icons/fa";
import { Page } from "~/components/App";

export const meta: MetaFunction = () => {
  let [searchParams, _] = useSearchParams();

  switch (searchParams.get("p")) {
    case "how":
      return [
        { title: "First Steps - VISCON" },
        { name: "description", content: "How to use Remix." }
      ];
    case "what":
      return [
        { title: "React Framework - VISCON" },
        { name: "description", content: "A framework built by devs for devs." }
      ];
    case "why":
      return [
        { title: "Who Cares? - VISCON" },
        { name: "description", content: "Why should you care?" }
      ];
  }

  return [
    { title: " - VISCON" },
    { name: "description", content: "Remix review." }
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  let params = new URL(request.url).searchParams;
  let page = params.get("p")?.toString();
  if (!page) {
    throw new Error("Invalid page");
  }
  return {
    p: page
  };
}

export default function () {
  let { p } = useLoaderData<typeof loader>();

  return (
    <Page>
      <RenderDiv p={p} />
    </Page>
  );
}

function RenderDiv({ p }: { p: string }) {
  const sectionStyle = {
    fontSize: "1.5rem"
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontSize: "1.25rem",
    marginBottom: "1rem"
  };

  const iconStyle = {
    fontSize: "2rem"
  };

  switch (p) {
    case "how":
      return (
        <section style={sectionStyle}>
          <h2>How Remix Works</h2>
          <ul className="pl-4">
            <li style={listItemStyle}>
              <FaTools style={iconStyle} /> Uses modern web APIs for a seamless
              experience
            </li>
            <li style={listItemStyle}>
              <FaBolt style={iconStyle} /> Server-side rendering for faster load
              times
            </li>
            <li style={listItemStyle}>
              <FaSync style={iconStyle} /> Data revalidation to keep your app
              up-to-date
            </li>
          </ul>
        </section>
      );
    case "what":
      return (
        <section style={sectionStyle}>
          <h2>What Remix Brings to the Table</h2>
          <ul className="pl-4">
            <li style={listItemStyle}>
              <FaGift style={iconStyle} /> Built-in support for forms and data
              fetching
            </li>
            <li style={listItemStyle}>
              <FaRocket style={iconStyle} /> Optimized performance with smart
              caching
            </li>
            <li style={listItemStyle}>
              <FaChartLine style={iconStyle} /> Improved developer experience
              with great tooling
            </li>
          </ul>
        </section>
      );
    case "why":
      return (
        <section style={sectionStyle}>
          <h2>Why Choose Remix</h2>
          <ul className="pl-4">
            <li style={listItemStyle}>
              <FaThumbsUp style={iconStyle} /> Highly flexible and customizable
            </li>
            <li style={listItemStyle}>
              <FaHeart style={iconStyle} /> Emphasis on user experience and
              performance
            </li>
            <li style={listItemStyle}>
              <FaLeaf style={iconStyle} /> Devlopement is easy and good
              community backing
            </li>
          </ul>
        </section>
      );
    default:
      return null;
  }
}
