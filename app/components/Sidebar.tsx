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
      className={`grid grid-cols-[1fr_15px] ${isCollapsed ? "w-[50px]" : "w-[250px]"} transition-width`}
      style={{
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
          <div className="col-span-1 w-[235px]">
            <div>
              <p className="text-lg font-bold">What, Who, When, Why</p>
              <ul className="indent-3">
                <NavLinkWrapper
                  to={"/who/better/than/remix/to/tell/you/how/good/remix/is"}
                  title="Remix"
                />
                <NavLinkWrapper to={"/roadmap"} title="Trajectory" />
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Init Project</p>
              <ul className="indent-3">
                <NavLinkWrapper to={"/starting"} title="The Fit" />
                <NavLinkWrapper to={"/deployment"} title="'The Epic Stack'" />
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">Bread & Butter</p>
              <ul className="indent-3">
                <NavLinkWrapper to={"/routes"} title="Routing" />
                <NavLinkWrapper
                  to={"/routes/layout"}
                  title="Layouts & Outlet"
                />
                <NavLinkWrapper to={"/loaders"} title="Loaders" />
                <NavLinkWrapper to={"/actions"} title="Actions" />
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">
                <NavLink
                  to={"/review"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                        ? "text-green-500 font-bold underline"
                        : ""
                  }
                >
                  Review
                </NavLink>
              </p>
              <ul className="indent-3">
                <RouteSearchParams to={"/review?p=what"} title="What is it?" />
                <RouteSearchParams to={"/review?p=how"} title="How it works?" />
                <RouteSearchParams
                  to={"/review?p=why"}
                  title="Why use Remix?"
                />
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

function RouteSearchParams({ to, title }: { to: string; title: string }) {
  return (
    <li>
      <NavLink to={to}>{title}</NavLink>
    </li>
  );
}
