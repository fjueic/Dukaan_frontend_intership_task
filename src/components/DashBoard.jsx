import React from "react";
import Header from "./Header";
import Overview from "./Overview";
import Transactions from "./Transactions";

const DashBoard = () => {
    return <div className="flex-1 h-screen
    ">
        <Header />
        <Overview />
        <Transactions />
        
    </div>;
};

export default DashBoard;
