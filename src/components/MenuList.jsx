import React from "react";
import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FiTruck } from "react-icons/fi";
import { RxSpeakerQuiet } from "react-icons/rx";
import { BsBarChartLine } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { BiMessageSquareEdit } from "react-icons/bi";
import { AiOutlineThunderbolt } from "react-icons/ai";

import MenuListItem from "./MenuListItem";
const MenuList = () => {
    return (
        <div>
            <MenuListItem icon={<GoHome />} title="Home" />
            <MenuListItem icon={<LuClipboardList />} title="Orders" />
            <MenuListItem icon={<HiOutlineSquares2X2 />} title="Products" />
            <MenuListItem icon={<FiTruck />} title="Delivery" />
            <MenuListItem icon={<RxSpeakerQuiet />} title="Marketing" />
            <MenuListItem icon={<BsBarChartLine />} title="Analytics" />
            <MenuListItem icon={<MdPayments />} title="Payments" 
                active={true}
            />
            <MenuListItem icon={<CiLocationArrow1 />} title="Tools" />
            <MenuListItem icon={<CiDiscount1 />} title="Discounts" />
            <MenuListItem icon={<GoPeople />} title="Audience" />
            <MenuListItem icon={<BiMessageSquareEdit />} title="Appearance" />
            <MenuListItem icon={<AiOutlineThunderbolt />} title="Plugins" />
        </div>
    );
};

export default MenuList;
