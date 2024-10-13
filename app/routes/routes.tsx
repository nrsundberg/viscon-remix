import { Page } from "~/components/App";
import type { MetaFunction } from "@remix-run/node";
import brooksPic from "~/images/DotRoutes.png";
import spider from "~/images/dynamicSegments.png";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Route Modules - VISCON" },
    { name: "description", content: "Is Remix gone forever?" }
  ];
};

export default function () {
  return (
    <Page>
      <div className="grid grid-rows-2 gap-3">
        <div>
          <div className="p-8 text-white">
            <h1 className="text-3xl font-bold mb-8">Dot Delimiters</h1>
            <p className="mb-6">
              Adding a <code className="bg-gray-700 px-1 rounded">.</code> to a
              route filename will create a{" "}
              <code className="bg-gray-700 px-1 rounded">/</code> in the URL.
            </p>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">app/</h2>
              <ul className="pl-8 border-l-2 border-gray-700 list-none">
                <li className="ml-4 mb-2">routes/</li>
                <ul className="pl-8 border-l-2 border-gray-700 list-none">
                  <li className="ml-4 mb-2">_index.tsx</li>
                  <li className="ml-4 mb-2">about.tsx</li>
                  <li className="ml-4 mb-2">concerts.trending.tsx</li>
                  <li className="ml-4 mb-2">concerts.salt-lake-city.tsx</li>
                  <li className="ml-4 mb-2">concerts.san-diego.tsx</li>
                </ul>
                <li className="ml-4 mt-4">root.tsx</li>
              </ul>
            </div>
            <div>
              <table className="min-w-full bg-gray-800">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b border-gray-700 text-left font-semibold">
                      URL
                    </th>
                    <th className="py-3 px-4 border-b border-gray-700 text-left font-semibold">
                      Matched Route
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">/</td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/_index.tsx
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">
                      /about
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/about.tsx
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">
                      /concerts/trending
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/concerts.trending.tsx
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">
                      /concerts/salt-lake-city
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/concerts.salt-lake-city.tsx
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">
                      /concerts/san-diego
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/concerts.san-diego.tsx
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <img src={brooksPic} alt={"React and Remix combination graphic"} /> */}
        </div>

        <div>
          <img height={400} width={1000} src={spider} alt={"Spider-man meme"} />
        </div>
      </div>
      <Outlet />
    </Page>
  );
}
