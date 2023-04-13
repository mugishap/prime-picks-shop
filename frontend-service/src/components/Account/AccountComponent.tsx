import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { IUser } from "../../types";
import { CommonContext } from "../../context";

const AccountComponent: React.FC = () => {
    const { user, activeTab, setUpdateUser, setUpdatePassword } = useContext(CommonContext);
    useEffect(() => {
        document.title = `${user.fullname} | Prime Picks`;
        user ? null : window.location.replace("/");
    }, []);
    return (
        <div className="w-full flex flex-col">
            <div className="py-12 px-16 flex w-full flex-col lg:flex-row lg:w-10/12 m-auto mt-16">
                <Sidebar />
                {
                    activeTab === "user"
                    &&
                    (<div className="flex w-full lg:w-6/12 pl-8 flex-col items-start justify-start">
                        <span className="text-3xl font-bold my-3">Account: </span>
                        <div className="my-1 text-lg w-full flex justify-between">
                            <span className="w-1/3">Name: </span>
                            <span className="font-bold w-2/3">{user.fullname}</span>
                        </div>
                        <div className="my-1 text-lg w-full flex justify-between">
                            <span className="w-1/3">E-mail: </span>
                            <span className="font-bold w-2/3">{user.email}</span>
                        </div>
                        <div className="my-1 text-lg w-full flex justify-between">
                            <span className="w-1/3">Telephone: </span>
                            <span className="font-bold w-2/3">{user.mobile ? user.mobile : "N/A"}</span>
                        </div>
                        <div className="my-1 text-lg w-full flex justify-between">
                            <span className="w-1/3">Address: </span>
                            <span className="font-bold w-2/3">{user.location}</span>
                        </div>
                        <div>
                            <button className="py-2 px-4 rounded bg-pink-600 text-white mx-2 cursor-pointer" onClick={() => setUpdateUser(true)}>UPDATE</button>
                            <button className="py-2 px-4 rounded bg-pink-600 text-white mx-2 cursor-pointer" onClick={() => setUpdatePassword(true)}>UPDATE PASSWORD</button>
                        </div>
                    </div>)
                }
                {
                    activeTab === "logout"
                    &&
                    (<div className="flex w-full lg:w-6/12 pl-8 flex-col items-center justify-center">
                        <span className="font-bold text-lg my-2">Are you sure you want to log out?</span>
                        <button className="py-2 px-4 rounded bg-pink-600 text-white">LOGOUT</button>
                    </div>)
                }
                {
                    activeTab === "history"
                    &&
                    (<div className="flex w-full lg:w-6/12 pl-8 flex-col items-start justify-start">
                        You buying history appears here
                    </div>)
                }
            </div>
        </div>
    );
};

export default AccountComponent;