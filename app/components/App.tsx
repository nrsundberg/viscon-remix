import React from "react";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import { Divider } from "@nextui-org/react";

export function AppPage({ ...props }) {
  return (
    <div className="h-lvh px-4 py-4">
      <Header />
      <Divider className="my-4" />
      {props.children}
    </div>
  );
}

export function PageMainContent({ ...props }) {
  return <div className="w-full inline-flex">{props.children}</div>;
}

export function Page({ ...props }) {
  return (
    <AppPage>
      <PageMainContent>
        <Sidebar />
        <div className="overflow-auto h-[88lvh] w-full">{props.children}</div>
      </PageMainContent>
    </AppPage>
  );
}

export function NestedPage({ ...props }) {
  return (
    <AppPage>
      <PageMainContent>
        <Sidebar />
        <div className="w-full h-full">{props.children}</div>
      </PageMainContent>
    </AppPage>
  );
}
