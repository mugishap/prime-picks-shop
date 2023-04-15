import { BiHome, BiPackage, BiPhoneCall, BiPlus, BiUser } from "react-icons/bi";
import { FiDollarSign, FiHeadphones, FiTruck } from 'react-icons/fi';
import { TbDiscount2 } from 'react-icons/tb';
import { AirPods, HeadPhones, IPad, IWatch, Phone, Pipes, SmartWatch, Tablet } from '../assets';
import { INavbarLink, ISidebarLink, ISlide } from "../types";

export const  navbarlinks: INavbarLink[] = [
    {
        name: "Home",
        href: "/",
        icon: BiHome,
        protected: false,
        label: "home"
    },
    {
        name: "Products",
        href: "/products",
        icon: BiHome,
        protected: false,
        label: "products"
    },
    {
        name: "Contact Us",
        href: "/contact",
        icon: BiPhoneCall,
        protected: false,
        label: "contact"
    }, {
        name: "About Us",
        href: "/about",
        icon: BiPhoneCall,
        protected: false,
        label: "about"
    },
]

export
    const topProducts = [
        {
            name: "Headphones",
            quantity: 20,
            image: HeadPhones
        },
        {
            name: "Mobile Phone",
            quantity: 25,
            image: Phone
        },
        {
            name: "CPU Heat Pipes",
            quantity: 57,
            image: Pipes
        },
        {
            name: "Smart Watch",
            quantity: 44,
            image: SmartWatch
        },
        {
            name: "With Bluetooth",
            quantity: 81,
            image: AirPods
        },
    ]

export
    const slides: ISlide[] = [
        {
            headline: "The best note book collection 2023",
            image: Tablet,
            offer: "10%",
            starting: "$999.000",
            color: "#ffd43a",
            background: "blueish"
        },
        {
            headline: "The best Smart Watch collection 2023",
            image: IWatch,
            offer: "-10%",
            starting: "$274.000",
            color: "#fd4b6b",
            background: "whitish"
        },
        {
            headline: "The best tablet collection 2023",
            image: IPad,
            offer: "-35%",
            starting: "$274.000",
            color: "#ffd43a",
            background: "blueish"
        },
    ]

export const features = [
    {
        title: "Free Delivery",
        subtitle: "Orders from all item",
        icon: FiTruck
    },
    {
        title: "Return and Refund",
        subtitle: "Money back guarantee",
        icon: FiDollarSign
    },
    {
        title: "Member Discount",
        subtitle: "Onevery order over $140.00",
        icon: TbDiscount2
    },
    {
        title: "Support 24/7",
        subtitle: "Contact us 24 hours a day",
        icon: FiHeadphones
    }
]

export const sidebarLinks: ISidebarLink[] = [
    {
        href: "/admin",
        icon: BiUser,
        name: "Dashboard",
        protected: true,
        label: "dashboard"
    },
    {
        href: "/admin/users",
        icon: BiUser,
        name: "Users Management",
        protected: true,
        label: "users_management"
    },
    {
        href: "/admin/new",
        icon: BiUser,
        name: "Admin Management",
        protected: true,
        label: "admin_management"
    },
    {
        href: "/admin/orders",
        icon: FiTruck,
        name: "Orders Management",
        protected: true,
        label: "orders_management"

    },
    {
        href: "/admin/products",
        icon: BiPackage,
        name: "Products Management",
        protected: true,
        label: "products_management"

    },
    {
        href: "/admin/products/new",
        icon: BiPlus,
        name: "Add New Product",
        protected: true,
        label: "new_product"
    },
]
