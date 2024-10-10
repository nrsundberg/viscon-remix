import { Button, Divider } from "@nextui-org/react";
import { RiMenuFold2Fill, RiMenuFoldFill } from "@remixicon/react";
import { useState } from "react";
import { Link, NavLink } from "@remix-run/react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className="grid grid-cols-2"
      style={{
        width: isCollapsed ? "50px" : "450px",
        transition: "width 0.3s",
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
              <h2>What, Who, When, Why</h2>
              <ul className="indent-3">
                <li>
                  <NavLink to="/1" className="no-underline">
                    SSR React
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/2" className="no-underline">
                    React Router
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/3" className="no-underline">
                    Trajectory
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/3" className="no-underline">
                    Speeeeeed
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3>Init Project</h3>
              <ul className="indent-3">
                <li>Bullet 1</li>
                <li>Bullet 2</li>
                <li>Bullet 3</li>
              </ul>
            </div>
            <div>
              <h3>Bread & Butter</h3>
              <ul className="indent-3">
                <li>Routes</li>
                <li>Loaders</li>
                <li>Actions</li>
              </ul>
            </div>
            <div>
              <h3>Review</h3>
              <ul className="indent-3">
                <li>Bullet 1</li>
                <li>Bullet 2</li>
                <li>Bullet 3</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <Divider orientation="vertical" className="mr-4" />
    </div>
  );
};

export default Sidebar;
