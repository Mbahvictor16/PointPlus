import React, { useContext, useRef, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import Point from "../../../../Helper/Point";
import { RiArrowDownSFill } from "react-icons/ri";
import Dropdown from "../drop-down/Dropdown";
import { MenuItems } from "../drop-down/menu-items/MenuItems";
import Dashboard from "../../dashboard/Dashboard";
import AvatarContext from "../../../../Api/contexts/AvatarContext";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavLinks({ handleOpenModal, handleToggleModal }) {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Customer");
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();
  const { avatar } = useContext(AvatarContext);

  window.addEventListener('click', (e) => {
    console.log(e.target === menuRef.current);
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    };
  });

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setClick(false);
  };

  const handleClick = () => setClick(!click);
  console.log(handleClick);

  return (
    <div className="w-full NavLink pb-[20px] px-[50px] h-20 border-b-[1px] border-b-white left-0 sticky top-0 z-50 bg-transparent drop-shadow-xl shadow-[0px_4px_10px_#00000026]">
      <div className="flex flex-col h-20 items-center justify-center">
        <div className="text-gray-600 body-font flex justify-between items-center w-full">
          <div className="flex items-center gap-[15px]">
            <div onClick={handleToggleModal} className="menu bg-amber-500 ml-[10px] hover:bg-[#ecb858ec] duration-300 rounded-full cursor-pointer md:hidden p-[7px] mt-[10px] text-white">
              <RxHamburgerMenu size={"1.2rem"} />
            </div>
            <div className="w-[50%]cursor-pointer flex justify-center items-center">
              <Link to={"/"}>
                <Point />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 p-4 items-center">
            <div
              onClick={handleOpenModal}
              className="bg-amber-500 login p-[10px] px-[30px] rounded-[30px] text-white drop-shadow-xl shadow-[0px_4px_10px_#00000026] transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <p className="font-semibold drop-shadow-xl">Get Started</p>
            </div>
            <div
              className="flex services cursor-pointer hover:bg-amber-500 hover:text-white p-[10px] rounded-[30px] px-[20px] border-2 border-amber-500  text-white items-center"
              onClick={toggleDropdown}
            >
              <p className="font-semibold">{selectedItem}</p>
              <RiArrowDownSFill />
              {/* Render dropdown if open */}
              {dropdownOpen && (
                <Dropdown
                  menuItems={MenuItems}
                  defaultItem={selectedItem}
                  handleSelect={handleSelect}
                />
              )}
            </div>
            <div className=" flex flex-col relative gap-[10px] justify-center items-center">
              <div className="w-[52px] border-2 border-gray-400 cursor-pointer h-[52px] rounded-full flex justify-center items-center">
                <img
                  ref={imgRef}
                  src={avatar}
                  className="w-full h-full object-cover rounded-full"
                  alt="avatar"
                  onClick={() => setOpen(!open)}
                />
              </div>
              {open && (
                <div
                  ref={menuRef}
                  className="bg-white rounded-lg absolute top-[60px] p-[10px] w-[100px] shadow-lg"
                >
                  <ul>
                    <li
                      onClick={() => setOpen(false)}
                      className="p-1 px-2 hover:bg-amber-500 font-[590] text-black hover:text-white rounded cursor-pointer"

                    >
                      <Link to={"/person"}>
                        Profile
                      </Link>
                    </li>
                    <li
                      onClick={() => setOpen(false)}
                      className="p-1 px-2 hover:bg-amber-500 text-black hover:text-white font-[590] rounded cursor-pointer"

                    >
                      <Link to={"/"}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link to={"/orders"} className="cart-icon">
              <div className="relative w-11 pt-3">
                <TiShoppingCart size={"2rem"} className="text-amber-500" />
                <span className="absolute rounded-xl bg-red-600 text-white border num w-4 top-1 right-0 text-sm flex items-center justify-center font-semibold">
                  7
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
