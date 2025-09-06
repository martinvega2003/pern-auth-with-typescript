import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()!;
  if (!isAuthenticated) return null;

  const [isOpen, setIsOpen] = useState(true);

  type SidebarLinkProps = {
    to: string;
    label: string;
  };

  const links: SidebarLinkProps[] = [
    { to: "/home", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/profile", label: "Profile" },
    { to: "/settings", label: "Settings" },
  ];

  const SidebarLink = ({ to, label }: SidebarLinkProps) => (
    <Link
      to={to}
      className="w-full h-fit m-2 px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md transition-colors duration-300 block"
      onClick={() => setIsOpen(false)} // Close sidebar on link click
    >
      {label}
    </Link>
  );

  return (
    <div className={`fixed top-16 left-0 h-full bg-zinc-100 dark:bg-gray-900 dark:text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-3/4'} w-64`}>
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        <h2 className="text-lg font-semibold">Sidebar</h2>
        <Button
          variant="text"
          textColor="text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaArrowRight className="rotate-180 transition-transform duration-500" /> : <FaArrowRight className="rotate-0 transition-transform duration-500" /> }
        </Button>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <SidebarLink {...link} />
            </li>
          ))}
          <li>
            <Button 
              variant="text" 
              textColor="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200"
              className="m-2 px-4 py-2" 
              onClick={logout}
            >
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;