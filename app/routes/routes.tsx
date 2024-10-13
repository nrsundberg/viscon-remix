import { Page } from "~/components/App";
import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Divider } from "@nextui-org/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Route Modules - VISCON" },
    { name: "description", content: "Is Remix gone forever?" }
  ];
};

export default function () {
  return (
    <Page>
      <div className="flex flex-col gap-4">
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
                  <li className="ml-4 mb-2">home.tsx</li>
                  <li className="ml-4 mb-2">threads.create.tsx</li>
                  <li className="ml-4 mb-2">threads.123.tsx</li>
                  <li className="ml-4 mb-2">threads.delete.tsx</li>
                </ul>
                <li className="ml-4 mt-4">root.tsx</li>
              </ul>
            </div>
            <div>
              <table className="bg-gray-800">
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
                      /home
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/home.tsx
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">
                      /threads/create
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/threads.create.tsx
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">
                      /threads/123
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/threads.123.tsx
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">
                      /threads/delete
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/threads.delete.tsx
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Divider />

        <div>
          <div className="p-8 text-white">
            <h1 className="text-3xl font-bold mb-8">Dynamic Segments</h1>
            <p className="mb-6">
              Usually your URLs aren't static but data-driven. Dynamic segments
              allow you to match segments of the URL and use that value in your
              code. You create them with the{" "}
              <code className="px-1 rounded">$</code> prefix.
            </p>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">app/</h2>
              <ul className="pl-8 border-l-2 border-gray-700 list-none">
                <li className="ml-4 mb-2">routes/</li>
                <ul className="pl-8 border-l-2 border-gray-700 list-none">
                  <li className="ml-4 mb-2">_index.tsx</li>
                  <li className="ml-4 mb-2">about.tsx</li>
                  <li className="ml-4 mb-2">thread.$id.tsx</li>
                  <li className="ml-4 mb-2">threads.$actions.tsx</li>
                </ul>
                <li className="ml-4 mt-4">root.tsx</li>
              </ul>
            </div>
            <div>
              <table className="bg-gray-800">
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
                      /home
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/home.tsx
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">
                      /threads/create
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/threads.$actions.tsx
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">
                      /thread/123
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/thread.$id.tsx
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-700">
                      /threads/982
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      app/routes/thread.$id.tsx
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Divider className="mb-4" />
      <Outlet />
    </Page>
  );
}
