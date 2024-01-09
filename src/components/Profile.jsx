import React from "react";
import { FaAngleDown } from "react-icons/fa";
const Profile = () => {
    return (
        <div
            className="flex flex-rol items-center justify-center mx-auto w-9/10 h-20 mr-4 ml-1
        "
        >
            <div
                className="w-20 h-20 rounded-full bg-[#1E2640] flex items-center justify-center flex-1
            "
            >
                {/* Picture */}
                <img
                    className="w-10/12 h-10/12  rounded-md
                "
                    src="./src/image/pic.png"
                    alt=""
                />
            </div>
            <div
                className="text-white flex-auto ml-1
            "
            >
                {/* Name */}
                <h1
                    className="font-bold text-2xl
                "
                >
                    Rohit
                </h1>
                {/* visit store */}
                <h1
                    className="underline text-xs text-[#D2D4D9]
                "
                >
                    Visit Store
                </h1>
            </div>
            <div className="text-white font-sans text-2xl cursor-pointer
            ">
                {/* drop down arrow */}
                <FaAngleDown />
            </div>
        </div>
    );
};

export default Profile;
