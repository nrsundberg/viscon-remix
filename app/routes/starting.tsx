import type { MetaFunction } from "@remix-run/node";
import { Button } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { SiSupabase } from "react-icons/si";
import { Page } from "~/components/App";

export const meta: MetaFunction = () => {
  return [
    { title: "Why Use Remix? - VISCON" },
    {
      name: "description",
      content: "What does it look like to start a project using Remix?"
    }
  ];
};

export default function () {
  return (
    <Page>
      <div className="flex flex-col p-8 space-y-16">
        {/* Single Page Apps (SPAs) Diagram */}
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Single Page Apps (SPAs)</h2>
          <p className="mb-8 text-xl">
            Skipping a couple trends between MPAs and SPAs, Single Page Apps
            moved much of the code from the server to the client. This let us
            create awesome user experiences by running much of our application
            in client-side JavaScript.
          </p>
          <div className="flex justify-between">
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-4 rounded-md w-[45%]">
              <h3 className="text-center text-white mb-4">SERVER</h3>
              <div className="bg-orange-800 p-4 mb-4 rounded-md text-white text-center">
                Persistence
              </div>
              <div className="bg-purple-800 p-4 mb-4 rounded-md text-white text-center">
                Routing
              </div>
              <div className="bg-blue-800 p-4 mb-4 rounded-md text-white text-center">
                Data fetching
              </div>
              <div className="bg-blue-700 p-4 rounded-md text-white text-center">
                Data mutation
              </div>
            </div>

            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-4 rounded-md w-[45%]">
              <h3 className="text-center text-white mb-4">CLIENT</h3>
              <div className="bg-green-800 p-4 mb-4 rounded-md text-white text-center">
                UI Feedback
              </div>
              <div className="bg-purple-800 p-4 mb-4 rounded-md text-white text-center">
                Routing
              </div>
              <div className="bg-blue-800 p-4 mb-4 rounded-md text-white text-center">
                Data fetching
              </div>
              <div className="bg-blue-700 p-4 mb-4 rounded-md text-white text-center">
                Data mutation
              </div>
              <div className="bg-yellow-800 p-4 rounded-md text-white text-center">
                Rendering
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Where Does Remix Fit?</h2>
          <p className="mb-8 text-xl">
            <span className="bg-yellow-200 text-black px-1 py-0.5 rounded">
              Remix
            </span>{" "}
            is the leading web framework to offer everything from a progressive
            SPA. It bridges the gap between the client and server. It's an
            opinionated web framework with sensible defaults that stick to the
            platform in order to make developing a great UI from the server very
            easy.
          </p>
          <div className="flex justify-between relative">
            {/* Server Column */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-4 rounded-md w-[45%]">
              <h3 className="text-center text-white mb-4">SERVER</h3>
              <div className="bg-orange-800 p-4 mb-4 rounded-md text-white text-center">
                Persistence
              </div>
              <div className="bg-purple-800 p-4 mb-4 rounded-md text-white text-center">
                Routing
              </div>
              <div className="bg-blue-800 p-4 mb-4 rounded-md text-white text-center">
                Data fetching
              </div>
              <div className="bg-blue-700 p-4 mb-4 rounded-md text-white text-center">
                Data mutation
              </div>
              <div className="bg-yellow-800 p-4 rounded-md text-white text-center">
                Rendering logic
              </div>
            </div>
            {/* Client Column */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-4 rounded-md w-[45%]">
              <h3 className="text-center text-white mb-4">CLIENT</h3>
              <div className="bg-green-800 p-4 mb-4 rounded-md text-white text-center">
                UI Feedback
              </div>
              <div className="bg-purple-800 p-4 mb-4 rounded-md text-white text-center">
                Routing
              </div>
              <div className="bg-blue-800 p-4 mb-4 rounded-md text-white text-center">
                Data fetching
              </div>
              <div className="bg-blue-700 p-4 mb-4 rounded-md text-white text-center">
                Data mutation
              </div>
              <div className="bg-yellow-800 p-4 rounded-md text-white text-center">
                Rendering
              </div>
            </div>
            {/* Remix Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white opacity-70 p-4 rounded-md text-center h-full text-black font-bold text-3xl">
                Remix
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>
        Credit:{" "}
        <Link
          className="underline text-blue-500"
          to={"https://thomasjuranek.com"}
          target="_blank"
        >
          Thomas Juranek
        </Link>{" "}
      </p>
    </Page>
  );
}
