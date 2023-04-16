import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { IContactData } from "../../types";
import { useCreateContact } from "../../hooks";
import { BiLoaderAlt } from "react-icons/bi";
import { CommonContext } from "../../context";

const ContactComponent: React.FC<{}> = () => {

  const { isLoggedIn, user } = useContext(CommonContext)
  const [contactData, setContactData] = React.useState<IContactData>({
    fullname: isLoggedIn ? user.fullname : "",
    email: isLoggedIn ? user.email : "",
    mobile: isLoggedIn ? (user.mobile) : 250,
    message: ""
  })
  const [contactLoading, setContactLoading] = React.useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setContactLoading(true)
      e.preventDefault()
      useCreateContact({ setLoading: setContactLoading, contactData, setContactData })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Slide direction="up" cascade triggerOnce>
      <section
        className="h-[calc(100vh_-_5rem)] min-h-[calc(100vh_-_5rem)] w-full"
        id="contacts"
      >
        <div className="container mx-auto pt-16 h-full">
          <div className="lg:flex h-[90%]">
            <div className="xl:w-2/5 lg:w-2/5 bg-slate-400 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
              <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                  Contact Us
                </h1>
                <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                  Got a question about us? Are you interested in partnering with
                  us? Have some suggestions or just want to say Hi? Just contact
                  us. We are here to assist you.
                </p>
                <div className="flex pb-4 items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-phone-call"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                  </div>
                  <p className="pl-4 text-white text-base">
                    +250 (782) 307 144
                  </p>
                </div>
                <div className="flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#FFFFFF"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </div>
                  <p className="pl-4 text-white text-base">
                    precieuxmugisha@gmail.com
                  </p>
                </div>
                <p className="text-lg text-white pt-10 tracking-wide">
                  KK 105 St <br />
                  Precieux MUGISHA
                </p>
              </div>
            </div>
            <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
              <form
                id="contact"
                className="bg-white py-4 px-8 rounded-tr rounded-br"
                onSubmit={handleSubmit}
              >
                <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
                  Enter Details
                </h1>
                <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                  <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        required
                        id="full_name"
                        name="full_name"
                        type="text"
                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        disabled={isLoggedIn}
                        value={contactData.fullname}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setContactData({ ...contactData, fullname: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setContactData({ ...contactData, email: e.target.value })
                        }
                        disabled={isLoggedIn}
                        value={contactData.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-wrap">
                  <div className="w-2/4 max-w-xs">
                    <div className="flex flex-col">
                      <label
                        htmlFor="phone"
                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Phone
                      </label>
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="number"
                        className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setContactData({ ...contactData, mobile: e.target.valueAsNumber })
                        }
                        disabled={isLoggedIn}
                        value={contactData.mobile}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-6">
                  <div className="flex flex-col">
                    <label
                      className="text-sm font-semibold text-gray-800 mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      required
                      
                      name="message"
                      className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                      rows={8}
                      id="message"
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setContactData({ ...contactData, message: e.target.value })
                      }
                      value={contactData.message}
                    />
                  </div>
                  <button
                    disabled={contactLoading}
                    type="submit"
                    className={`focus:outline-none ${contactLoading ? "bg-slate-500 cursor-not-allowed" : "bg-pink-600 hover:bg-red-600"} transition duration-150 ease-in-out  rounded text-white px-8 py-3 text-sm leading-6`}
                  >
                    {contactLoading ?
                      <BiLoaderAlt className="animate-spin w-10 text-white" size={25} />
                      :
                      "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
};

export default ContactComponent;