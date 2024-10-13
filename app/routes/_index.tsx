import type { MetaFunction } from "@remix-run/node";
import { Page } from "~/components/App";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Intro - VISCON" },
    { name: "description", content: "Welcome to our Remix intro!" }
  ];
};

export default function Index() {
  return (
    <Page>
      <div className="flex flex-col text-center items-center">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Welcome to Remix & Modern Web Development
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Build lightning-fast web apps with Remix, TailwindCSS, React, and
          Prisma. Deployed with ease using Fly.io!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-purple-800 bg-opacity-75 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4">Why Remix?</h2>
            <p>Server-rendered, fast loading web apps with enhanced routing.</p>
          </div>
          <div className="bg-purple-800 bg-opacity-75 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4">Made By Devs, For Devs</h2>
            <p>
              Get off the ground quickly because it was built with you in mind.
            </p>
          </div>
          <div className="bg-purple-800 bg-opacity-75 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4">Legacy SPA</h2>
            <p>
              Remix offers a SPA mode for legacy apps to incrementally adopt
              SSR.
            </p>
          </div>
          {/* <div className="bg-purple-800 bg-opacity-75 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4">React Power</h2>
            <p>Build dynamic UIs with the world’s most popular library.</p>
          </div>
          <div className="bg-purple-800 bg-opacity-75 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4">Deploy with Fly.io</h2>
            <p>
              Deploy full-stack apps close to your users with global edge
              deployment.
            </p>
          </div> */}
        </div>
      </div>
    </Page>
  );
}
