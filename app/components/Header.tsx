import { ThemeSwitcher } from "~/components/ThemeSwitcher";

export default function () {
  return (
    <div className="w-[100%] justify-between flex">
      <div className="grid grid-rows-2">
        <h1 className="text-3xl">Intro to Remix - a VISCON presentation</h1>
        <h4>Blazingly fast UI development with optimistic UI out-of-the-box</h4>
      </div>

      <ThemeSwitcher />
    </div>
  );
}
