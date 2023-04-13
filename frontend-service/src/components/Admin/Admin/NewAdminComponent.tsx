import React, { useContext, useState } from 'react'
import { CommonContext } from '../../../context';
import { ISignupData } from '../../../types';
import { toast } from 'react-toastify';

const NewAdminComponent: React.FC<{}> = () => {
    const { dispatch } = useContext(CommonContext);
    const [signupData, setSignupData] = useState<ISignupData>({
        fullname: "",
        email: "",
        mobile: "",
        location: "",
        password: "",
        showPassword: false,
        role: "ADMIN"
    })
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (!signupData.email || !signupData.password) return toast.error("Please fill all the fields");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="flex w-full flex-col bg-slate-100 items-center">
            <span className='font-bold text-2xl my-6'>Create New Admin</span>
            <div className='w-11/12 sm:w-2/3 lg:w-1/3 shadow-lg rounded p-4'>
                <form className="flex w-full flex-col" onSubmit={handleSubmit}>
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
                                setSignupData({ ...signupData, fullname: e.target.value });
                            }}
                            value={signupData.fullname}
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
                                setSignupData({ ...signupData, email: e.target.value });
                            }}
                            value={signupData.email}
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
                                setSignupData({ ...signupData, mobile: e.target.value });
                            }}
                            value={signupData.mobile}
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
                                setSignupData({ ...signupData, location: e.target.value });
                            }}
                            value={signupData.location}
                        />
                    </div>

                    <div className="my-1 w-full">
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Password
                        </label>
                        <div className="relative flex items-center justify-center">
                            <input
                                aria-label="enter Password"
                                role="input"
                                type={signupData.showPassword ? "text" : "password"}
                                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                placeholder="Enter password"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSignupData({ ...signupData, password: e.target.value })}
                                value={signupData.password}
                            />
                            <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onClick={() => setSignupData({ ...signupData, showPassword: !signupData.showPassword })}
                                >
                                    <path
                                        d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                        fill="#71717A"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button
                            role="button"
                            aria-label="create my account"
                            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-pink-500 border rounded hover:bg-pink-600 duration-1000 hover:animate-ring py-4 w-full disabled:bg-slate-600"
                            type="submit"
                            disabled={loading}
                        >
                            REGISTER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewAdminComponent