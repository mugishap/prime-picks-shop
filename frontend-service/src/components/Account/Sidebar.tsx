import React, { useContext, useState } from "react";
import { IconType } from "react-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IUser } from "../../types";
import { BiHistory, BiLogOut, BiUser } from "react-icons/bi";
import { CommonContext } from "../../context";

export interface Link {
    id: number;
    linkName: string | undefined;
    icon: IconType;
    label: string
}
const Sidebar: React.FC = () => {
    const { activeTab, setActiveTab } = useContext(CommonContext);
    const userSlice = useSelector((state: any) => state.userSlice);
    const user: IUser = userSlice.user;
    const dispatch = useDispatch();
    const links: Link[] = [
        {
            id: 1,
            linkName: user.fullname,
            icon: BiUser,
            label: "user"

        },
        {
            id: 2,
            linkName: "Logout",
            icon: BiLogOut,
            label: "logout"
        },
        {
            id: 3,
            linkName: "Buying profiles",
            icon: BiHistory,
            label: "history"
        }
    ];

    return (
        <div className='w-full lg:w-3/12 bg-slate-200 rounded py-4 flex flex-col text-black'>
            <span className='text-2xl font-bold px-4 py-6'>Account Details: </span>
            <div className='flex flex-col'>
                {links.map((link: Link, index: number) => (
                    <div
                        key={index}
                        className={`cursor-pointer py-2 px-4  flex items-center justify-start text-lg hover:text-redish w-full ${activeTab === link.label
                            ? "bg-white text-black"
                            : "bg-inherit text-black"
                            }`}
                    >
                        <span className='w-1/12'>
                            <link.icon />
                        </span>
                        <span className='px-2' onClick={() => setActiveTab(link.label)}>{link.linkName}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;