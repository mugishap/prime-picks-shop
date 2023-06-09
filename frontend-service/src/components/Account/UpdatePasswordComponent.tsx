import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import { toast } from 'react-toastify'
import { CommonContext } from '../../context'
import { useUpdatePassword } from '../../hooks'
import { INewPasswordData } from '../../types'

const UpdatePasswordComponent: React.FC<{}> = ({ }) => {
    const { setUpdatePassword, loading, setLoading, dispatch } = React.useContext(CommonContext)
    const [newPasswordData, setNewPasswordData] = React.useState<INewPasswordData>({
        oldPassword: "",
        newPassword: "",
        showPassword: false
    })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setLoading(true)
            if (!newPasswordData.oldPassword || !newPasswordData.newPassword) return toast.error("Please fill all the fields");
            useUpdatePassword({ setUpdatePassword, newPasswordData, setLoading, dispatch })
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='z-[2] w-full h-screen fixed top-0 left-0 bg-black/20 backdrop-blur-lg flex items-center justify-center'>
            <div className='absolute z-[3] w-full h-full flex items-center justify-center' onClick={() => setUpdatePassword(false)}></div>
            <div className='z-[5] bg-white w-11/12 mmsm:w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12  p-6 h-fit py-8 rounded flex flex-col justify-between'>
                <div className="flex w-full flex-col">
                    <form className="flex w-full flex-col" onSubmit={handleSubmit}>
                        <p
                            tabIndex={0}
                            role="heading"
                            aria-label="Change your password"
                            className="text-2xl font-extrabold leading-6 text-gray-800"
                        >
                            Change your password
                        </p>
                        <div className="my-8">
                            <div className="my-1 w-full">
                                <label className="text-sm font-medium leading-none text-gray-800">
                                    Old Password
                                </label>
                                <div className="relative flex items-center justify-center">
                                    <input
                                        aria-label="enter Password"
                                        role="input"
                                        type={newPasswordData.showPassword ? "text" : "password"}
                                        className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                        placeholder="Enter old password"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPasswordData({ ...newPasswordData, oldPassword: e.target.value })}
                                        value={newPasswordData.oldPassword}
                                    />
                                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            onClick={() => setNewPasswordData({ ...newPasswordData, showPassword: !newPasswordData.showPassword })}
                                        >
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="my-1 w-full">
                                <label className="text-sm font-medium leading-none text-gray-800">
                                    New Password
                                </label>
                                <div className="relative flex items-center justify-center">
                                    <input
                                        aria-label="enter Password"
                                        role="input"
                                        type={newPasswordData.showPassword ? "text" : "password"}
                                        className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                                        placeholder="Enter new password"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPasswordData({ ...newPasswordData, newPassword: e.target.value })}
                                        value={newPasswordData.newPassword}
                                    />
                                    <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            onClick={() => setNewPasswordData({ ...newPasswordData, showPassword: !newPasswordData.showPassword })}
                                        >
                                            <path
                                                d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                                                fill="#71717A"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>


                            <button
                                role="button"
                                aria-label="login "
                                className="focus:ring-2 flex items-center mt-6 justify-center focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-pink-500 border rounded hover:bg-pink-600 duration-1000 hover:animate-ring py-4 w-full disabled:bg-slate-600"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? <BiLoaderAlt className="animate-spin" size={25} /> : "CHANGE"}
                            </button>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    )
}

export default UpdatePasswordComponent