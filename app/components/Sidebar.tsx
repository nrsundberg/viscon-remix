import { Button, Divider } from "@nextui-org/react";
import { RiMenuFold2Fill, RiMenuFoldFill } from "@remixicon/react";
import { useState } from "react";
import { Link } from "@remix-run/react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className="grid grid-cols-2"
      style={{
        width: isCollapsed ? "50px" : "200px",
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
              <h3>Section 1</h3>
              <ul className="indent-3">
                <li>
                  <Link to="/1" className="no-underline">
                    Bullet 1
                  </Link>
                </li>
                <li>
                  <Link to="/2" className="no-underline">
                    Bullet 2
                  </Link>
                </li>
                <li>
                  <Link to="/3" className="no-underline">
                    Bullet 3
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Section 2</h3>
              <ul className="indent-3">
                <li>Bullet 1</li>
                <li>Bullet 2</li>
                <li>Bullet 3</li>
              </ul>
            </div>
            <div>
              <h3>Section 3</h3>
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
