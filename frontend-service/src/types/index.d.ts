import { IconType } from "react-icons";

interface TimestampAudit {
    createdAt: string
    updatedAt: string
}

export interface INavbarLink {
    name: string,
    icon: IconType,
    href: string,
    protected: boolean,
    label: string
}

export interface ISidebarLink extends INavbarLink { }

export interface IUser extends TimestampAudit {
    _id: string,
    fullname: string,
    email: string,
    mobile?: string,
    avatar: string,
    role: "NORMAL" | "ADMIN",
    location?: string,
}

export interface IProduct extends TimestampAudit {
    _id: string,
    name: string,
    description: string,
    price: number,
    currency: "RWF" | "USD",
    quantity: number,
    image: string,
}

export interface IOrder extends TimestampAudit {
    _id: string,
    user: IUser,
    product: IProduct,
    quantity: number,
}

export interface ISignupData {
    fullname: string,
    email: string,
    mobile: string,
    location: string
    password: string,
    showPassword: boolean,
    role?: "ADMIN" | "NORMAL"
}

export interface ILoginData {
    email: string,
    password: string,
    showPassword: boolean
}

export interface ISlide {
    image: string,
    headline: string,
    offer: string,
    starting: string,
    color: string,
    background: "greenish" | "whitish"
}

export interface IProductData {
    name: string,
    description: string,
    price: number,
    currency: "RWF" | "USD",
    quantity: number,
    imageStr: string,
}