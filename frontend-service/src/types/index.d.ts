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

}
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

export interface SignupData {
    fullname: string,
    email: string,
    mobile: string,
    password: string,
}

export interface Logindata {
    email: string,
    password: string,
}