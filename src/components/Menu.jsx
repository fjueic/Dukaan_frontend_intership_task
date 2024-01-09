import React from "react";
import Profile from "./Profile";
import MenuList from "./MenuList";
const Menu = () => {
    return (
        <div
            className="w-56 h-full bg-[#1E2640] flex flex-col 
            "
        >
            {/* profile info */}
            <Profile />
            <MenuList />
        </div>
    );
};

export default Menu;
