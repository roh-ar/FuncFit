import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';

import { links } from '../testData/TestData';

const Sidebar = () => {

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-300 m-2';

  return (
    <div className="h-screen w-80 md:overflow-hidden overflow-auto md:hover:overflow-auto bg-white shadow-2xl sticky top-0">
        <>
          <div className="flex justify-between items-center">
            <Link to="/home" className="flex items-center justify-center gap-3 mt-7 ml-16 text-xl font-extrabold tracking-tight text-black">
              <span>FunFit</span>
            </Link>
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-gray-700 mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
          </div>
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-12 uppercase">
                  {item.title}
                </p>
                <div>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
        </>
    </div>
  );
};

export default Sidebar;