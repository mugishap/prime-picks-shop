import { format } from "date-fns";
import React from "react";
import { RiCamera2Line, RiLoader2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CommonContext } from "../../context";
import { useGetUserOrders, useUpdateAvatar } from "../../hooks";
import { setActiveProduct } from "../../redux/slices/productSlice";
import { logout } from "../../redux/slices/userSlice";
import { IOrder } from "../../types";
import { checkFileType } from "../../utils/file";
import Sidebar from "./Sidebar";

const AccountComponent: React.FC = () => {
    const { user, activeTab, myOrders, dispatch, setLoading, setUpdateUser, setUpdatePassword } = React.useContext(CommonContext);
    const [updateAvatarLoading, setUpdateAvatarLoading] = React.useState<boolean>(false)
    React.useEffect(() => {
        document.title = `${user.fullname} | Prime Picks`;
        useGetUserOrders({ dispatch, setLoading })
    }, []);
    const updateAvatar = async () => {
        toast.info("Please wait while your avatar is uploading")
        setUpdateAvatarLoading(true)
        const element = document.querySelector("#updateAvatarID") as HTMLInputElement
        const reader = new FileReader()
        const file: File | null = element.files && element.files[0]
        if (!checkFileType("updateAvatarID")) return toast.error("Only png and jpeg images are allowed")
        if (!file) return toast.error("Oops you image failed to upload try again!")
        reader.addEventListener('loadend', async () => {
            useUpdateAvatar({ avatarString: reader.result as string, dispatch, setLoading: setUpdateAvatarLoading })
        })
        reader.readAsDataURL(file as File)
    }
    return (
        <div className="w-full flex flex-col">
            <div className="py-12 px-16 flex w-full flex-col lg:flex-row lg:w-10/12 m-auto mt-16">
                <Sidebar />
                {
                    activeTab === "user"
                    &&
                    (<div className="flex w-full lg:w-8/12 pl-8 items-start justify-start">
                        <div className="flex flex-col lg:w-8/12">
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
                        </div>
                        <div>
                            <input type="file" id="updateAvatarID" accept="image/*" onChange={updateAvatar} className="hidden" />
                            <label htmlFor='updateAvatarID' title='Update Avatar' className='relative cursor-pointer'>
                                <div onMouseEnter={() => {
                                    const elt = document.querySelector(".camera") as HTMLElement
                                    elt?.classList.replace("hidden", "flex")
                                }}
                                    onMouseLeave={() => {
                                        const elt = document.querySelector(".camera") as HTMLElement
                                        elt?.classList.replace("flex", "hidden")
                                    }}
                                    className={`w-full h-full flex items-center justify-center ${updateAvatarLoading ? "bg-black/70 " : " hover:bg-black/60 "} absolute rounded-full`}>
                                    {
                                        updateAvatarLoading
                                            ?
                                            <RiLoader2Line className='text-4xl text-white animate-spin' />
                                            :
                                            <RiCamera2Line className='camera hidden text-white text-2xl' />}
                                </div>
                                <img src={user.avatar} className="w-24 h-24 rounded-full object-cover avatar" loading='lazy' alt="" />
                            </label>
                        </div>
                    </div>)
                }
                {
                    activeTab === "logout"
                    &&
                    (<div className="flex w-full lg:w-6/12 pl-8 flex-col items-center justify-center">
                        <span className="font-bold text-lg my-2">Are you sure you want to log out?</span>
                        <button className="py-2 px-4 rounded bg-pink-600 text-white" onClick={() => {
                            dispatch(logout({}))
                            window.location.replace("/")
                        }}>LOGOUT</button>
                    </div>)
                }
                {
                    activeTab === "history"
                    &&
                    (<div className="flex w-full lg:w-6/12 pl-8 flex-col items-start justify-start">
                        {
                            myOrders?.map((order: IOrder, index: number) => {
                                return (
                                    <Link to={`/product`} key={index} className='w-full'>
                                        <div onClick={() => { dispatch(setActiveProduct(order.product)); }} className='flex w-11/12 px-4 py-2 items-start justify-between my-2 hover:bg-slate-200 rounded'>
                                            <div className="flex items-start justify-start">
                                                <img src={order.product.image} className="mr-4 object-cover w-24 h-24 rounded" alt="" />
                                                <div className='flex flex-col'>
                                                    <span className='flex my-1 text-sm '>
                                                        <span className='font-bold'>
                                                            Name:
                                                        </span>
                                                        <span>
                                                            {order.product.name}
                                                        </span>
                                                    </span>
                                                    <span className='flex my-1 text-sm '>
                                                        <span className='font-bold'>
                                                            Price:
                                                        </span>
                                                        <span>
                                                            {order.product.price} &nbsp; {order.product.currency}
                                                        </span>
                                                    </span>
                                                    <span className='flex my-1 text-sm '>
                                                        <span className='font-bold'>
                                                            Date:
                                                        </span>
                                                        <span>
                                                            {format(parseInt(order.product.createdAt as string), 'do MMM Y')}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                {order.status === "PENDING" &&
                                                    <button className="bg-delete-red px-4 rounded text-white py-1">Delete Order</button>
                                                }
                                                <button className={`${order.status === "PENDING" ? "bg-slate-500" : order.status === "GRANTED" ? "bg-green-500" : "bg-delete-red"} px-4 rounded text-white py-1 my-2`}>{order.status}</button>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                    </div>)
                }
            </div>
        </div >
    );
};

export default AccountComponent;