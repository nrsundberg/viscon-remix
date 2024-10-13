import { Link } from "@remix-run/react";
import remixLogo from "~/images/remix-letter-glowing.png";

export default function () {
  return (
    <div className="w-full justify-between flex">
      <div className="grid grid-rows-2">
        <Link to={"/"} className="text-3xl">
          Intro to Remix - a VISCON presentation
        </Link>
        <h4>Blazingly fast UI development with optimistic UI out-of-the-box</h4>
      </div>

      <Link to={"https://remix.run"} target="_blank">
        <img height={100} width={100} src={remixLogo} alt="Remix Logo" />
      </Link>
    </div>
  );
}
