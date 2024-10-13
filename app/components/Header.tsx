import { Link } from "@remix-run/react";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";

export default function () {
  return (
    <div className="w-[100%] justify-between flex">
      <div className="grid grid-rows-2">
        <Link to={"/"} className="text-3xl">
          Intro to Remix - a VISCON presentation
        </Link>
        <h4>Blazingly fast UI development with optimistic UI out-of-the-box</h4>
      </div>

      <ThemeSwitcher />
    </div>
  );
}
