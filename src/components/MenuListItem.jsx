import React from "react";

const MenuListItem = ({ icon, title, active }) => {
    return (
        <div
            className={` ml-2 flex items-center px-2 py-2 rounded-l-[0.5rem]  hover:text-[#F5F7FA] hover:bg-[#343C53] cursor-pointer
            ${active ? "text-[#fff] bg-[#343C53] " : " text-[#D2D4D9]"}
            `}
        >
            {icon}
            <p
                className="ml-3
        "
            >
                {title}
            </p>
        </div>
    );
};

export default MenuListItem;
