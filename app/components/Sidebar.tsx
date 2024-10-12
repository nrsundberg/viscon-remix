import { Button, Divider } from "@nextui-org/react";
import { RiMenuFold2Fill, RiMenuFoldFill } from "@remixicon/react";
import { useState } from "react";
import { NavLink } from "@remix-run/react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  function NavLinkWrapper({ to, title }: { to: string; title: string }) {
    return (
      <li>
        <NavLink
          to={to}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "text-green-500 font-bold underline"
                : ""
          }
        >
          {title}
        </NavLink>
      </li>
    );
  }

  return (
    <div
      className="grid grid-cols-[1fr_15px]"
      style={{
        width: isCollapsed ? "50px" : "250px",
        transition: "width 0.3s"
      }}
    >
      <div>
        <Button
          isIconOnly
          disableRipple
          variant="light"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <RiMenuFold2Fill /> : <RiMenuFoldFill />}
        </Button>
        {!isCollapsed && (
          <div>
            <div>
              <p className="text-lg font-bold">What, Who, When, Why</p>
              <ul className="indent-3">
                <NavLinkWrapper
                  to={"/who/better/than/remix/to/tell/you/how/good/remix/is"}
                  title="Remix"
                />
                <NavLinkWrapper to={"/roadmap"} title="Trajectory" />
                <NavLinkWrapper to={"/devX"} title="Speeeeed" />
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Init Project</p>
              <ul className="indent-3">
                <NavLinkWrapper to={"/starting"} title="Needs" />
                <NavLinkWrapper to={"/deployment"} title="Providers" />
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Bread & Butter</p>
              <ul className="indent-3">
                <NavLinkWrapper to={"/routes"} title="Routing" />
                <p className="indent-6">
                  <NavLinkWrapper
                    to={"/routes/layout"}
                    title="Layouts & Outlet"
                  />
                </p>
                <NavLinkWrapper to={"/loaders"} title="Loaders" />
                <NavLinkWrapper to={"/actions"} title="Actions" />
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Review</p>
              <ul className="indent-3">
                <NavLinkWrapper to={"/review?p=what"} title="What is it?" />
                <NavLinkWrapper to={"/review?p=how"} title="How to start?" />
                <NavLinkWrapper to={"/review?p=why"} title="Why to use it?" />
              </ul>
            </div>
          </div>
        )}
      </div>
      <Divider orientation="vertical" className="mr-4 px-0.5" />
    </div>
  );
};

export default Sidebar;
