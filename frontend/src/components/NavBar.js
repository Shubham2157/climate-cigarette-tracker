import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import img from '../media/cigarette.png';

function NavList() {
  return (
    <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
      <li>
        <a href="/" className="text-white font-medium hover:text-blue-100 transition-colors duration-300">
          Location
        </a>
      </li>
    </ul>
  );
}
 
export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <nav className="backdrop-blur-md bg-white/10 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={img} alt="Logo" className="h-8 w-8" />
            <a href="/" className="text-2xl font-bold text-white">
              Climate Tracker
            </a>
          </div>
          
          <div className="hidden lg:block">
            <NavList />
          </div>

          <button
            className="lg:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {openNav && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
            <NavList />
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;