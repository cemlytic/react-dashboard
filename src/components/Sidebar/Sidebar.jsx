import { useSelector } from "react-redux";
import { selectSidebar } from "../../features/sidebarSlice";

import { sidebarLinks } from "../../constants";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const isOpen = useSelector(selectSidebar);

  return (
    <aside
      className={`fixed top-0 left-0 z-30 w-64 h-screen pt-24 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 py-5">
        <ul className="font-medium flex items-start gap-2 flex-col">
          {sidebarLinks.map((link) => (
            <SidebarLink key={link.id} {...link} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
