import { BiCart, BiHome, BiPhoneCall } from "react-icons/bi";
import { INavbarLink } from "../types";
import { AirPods, HeadPhones, Phone, Pipes, SmartWatch } from '../assets'
import { IPad, IWatch, Tablet } from '../assets'
import { ISlide } from '../types'
import { FiDollarSign, FiHeadphones, FiTruck } from 'react-icons/fi'
import { TbDiscount2 } from 'react-icons/tb'

export const navbarlinks: INavbarLink[] = [
    {
        name: "Home",
        href: "/",
        icon: BiHome,
        protected: false
    },
    {
        name: "Products",
        href: "/products",
        icon: BiHome,
        protected: false
    },
    {
        name: "Cart",
        href: "#",
        icon: BiCart,
        protected: true
    },
    {
        name: "Contact Us",
        href: "/contact",
        icon: BiPhoneCall,
        protected: false
    }, {
        name: "About Us",
        href: "/about",
        icon: BiPhoneCall,
        protected: false
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
        background: "greenish"
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
        background: "greenish"
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
