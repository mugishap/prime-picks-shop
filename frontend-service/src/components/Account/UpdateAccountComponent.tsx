import React, { useContext, useState } from 'react'
import { IUser, IUserData } from '../../types'
import { toast } from 'react-toastify'
import { CommonContext } from '../../context'

const UpdateAccountComponent: React.FC<{}> = ({ }) => {
    const { dispatch, setUpdateUser, user } = useContext(CommonContext)
    const [userData, setUserData] = useState<IUserData>({ ...user, avatarString: user.avatar })
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            if (!userData.email || !userData.fullname || !userData.location || !userData.mobile) return toast.error("Please fill all the fields");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='z-[2] w-full h-screen fixed top-0 left-0 bg-black/20 backdrop-blur-md flex items-center justify-center'>
            <div className='absolute z-[3] w-full h-full flex items-center justify-center' onClick={() => setUpdateUser(false)}></div>
            <div className='z-[5] bg-white w-11/12 mmsm:w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12  p-6 h-fit py-8 rounded flex flex-col justify-between'>
                <div className="flex w-full flex-col">
                    <form className="flex w-full flex-col" onSubmit={handleSubmit}>
                        <p
                            tabIndex={0}
                            role="heading"
                            aria-label="Update your Account"
                            className="text-2xl font-extrabold leading-6 text-gray-800"
                        >
                            Update your Account
                        </p>
                        <div className="my-1">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Full Names
                            </label>
                            <input
                                aria-label="enter fullnames"
                                role="input"
                                type="text"
                                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                placeholder="Full Names"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setUserData({ ...userData, fullname: e.target.value });
                                }}
                                value={userData.fullname}
                            />
                        </div>

                        <div className="my-1">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input
                                aria-label="enter email adress"
                                role="input"
                                type="email"
                                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                placeholder="Email"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setUserData({ ...userData, email: e.target.value });
                                }}
                                value={userData.email}
                            />
                        </div>

                        <div className="my-1">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Telephone
                            </label>
                            <input
                                aria-label="enter telephone adress"
                                role="input"
                                type={"tel"}
                                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                placeholder="Telephone"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setUserData({ ...userData, mobile: e.target.value });
                                }}
                                value={userData.mobile}
                            />
                        </div>

                        <div className="my-1">
                            <label className="text-sm font-medium leading-none text-gray-800">
                                Location
                            </label>
                            <input
                                aria-label="enter location adress"
                                role="input"
                                type={"text"}
                                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                placeholder="Location"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setUserData({ ...userData, location: e.target.value });
                                }}
                                value={userData.location}
                            />
                        </div>
                        <div className="mt-8">
                            <button
                                role="button"
                                aria-label="create my account"
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-pink-500 border rounded hover:bg-pink-600 duration-1000 hover:animate-ring py-4 w-full disabled:bg-slate-600"
                                type="submit"
                                disabled={loading}
                            >
                                SAVE
                            </button>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    )
}

export default UpdateAccountComponent