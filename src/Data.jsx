import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
// import { BsBarChartLine } from "react-icons/bs";
// import { MdOutLineScience } from "react-icons/md";

import courses1 from "./assets/course.png"

import logo from "./assets/logo-tanyadata.png";

export const NavLinks = [
    {
        id: 1,
        href: "home",
        link: "Home",
    },
    {
        id: 2,
        href: "about",
        link: "About",
    },
    {
        id: 3,
        href: "courses",
        link: "Courses",
    },
    {
        id: 4,
        href: "teacher",
        link: "Teacher",
    },
    {
        id: 5,
        href: "contact",
        link: "Contact",
    },
];

export const categories = [
    {
        id: 1,
        icon: <FiPenTool />,
        category: "Design",
    },
    {
        id: 2,
        icon: <FaLaptopCode />,
        category: "Development",
    },
    {
        id: 3,
        icon: <FaLaptopCode />,
        category: "Development",
    },
    {
        id: 4,
        icon: <FaLaptopCode />,
        category: "Development",
    },
]

export const courses = [
    {
        id: 1,
        image: courses1,
        category: "Web Design",
        title: "The Complete web Design Course",
        rating: 4.9,
        participants: 500,
        price: 105
    },
    {
        id: 2,
        image: courses1,
        category: "Web Design",
        title: "The Complete web Design Course",
        rating: 4.9,
        participants: 900,
        price: 105
    },
    {
        id: 3,
        image: courses1,
        category: "Web Design",
        title: "The Complete web Design Course",
        rating: 4.9,
        participants: 900,
        price: 105
    },
    {
        id: 4,
        image: courses1,
        category: "Web Design",
        title: "The Complete web Design Course",
        rating: 4.9,
        participants: 900,
        price: 105
    },
];


export const logos = [logo];

export const accordions = [
    {
        id: 1,
        title: "What is TanyaData?",
    },
    {
        id: 2,
        title: "What can I learn from TanyaData?",
    },
    {
        id: 3,
        title: "Can I teach on TanyaData?",
    },
    {
        id: 4,
        title: "What is included in my TanyaData membership?",
    },
];
