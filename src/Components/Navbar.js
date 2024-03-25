import {React, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import UserProfile from './UserProfile'

import avatar from '../images/icons/avatar.jpg'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-gray-300"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
);

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <div className="flex items-start p-2 relative pt-5 bg-white h-20 w-screen shadow-md ">

      <NavButton title="Menu"  color="#000000" icon={<AiOutlineMenu />} onClick={handleClick} />
      {isShown && (
            <div>
            </div>
          )}
      {isShown && <UserProfile/>}
      <div className="flex ml-auto">
        <NavButton className='ml-10' title="Chat" dotColor="#03C9D7"  color="#000000" icon={<BsChatLeft />} />
          <div
            className="flex items-center gap-2 cursor-pointer p-1 pl-6 hover:bg-gray-300 rounded-lg"
            onClick={handleClick}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />

            <p>
              <span className="text-black text-14">Hi,</span>{' '}
              <span className="text-black font-bold ml-1 text-14">
                John
              </span>
            </p>
            <MdKeyboardArrowDown className="text-black text-14" />
          </div>
          {isShown && (
            <div>
            </div>
          )}
          {isShown && <UserProfile/>}
         
      </div>
    </div>
  );
};

export default Navbar;