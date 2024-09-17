import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectTheme } from "../../features/themeSlice";
import { toggleSidebar } from "../../features/sidebarSlice";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button className="sm:hidden flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <HiOutlineMenuAlt2
                className="text-2xl"
                onClick={() => dispatch(toggleSidebar())}
              />
            </button>
            <a href="#" className="flex items-center mx-5">
              <MdSpaceDashboard className="text-red-500 h-8 text-2xl mx-1 hover:scale-90" />
              <span className="text-xl hidden sm:block font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                DashBoard
              </span>
            </a>
          </div>
          <button
            className="p-2 rounded-full dark:bg-slate-50 text-lg dark:text-slate-700"
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
