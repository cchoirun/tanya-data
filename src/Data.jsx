import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
// import { BsBarChartLine } from "react-icons/bs";
// import { MdOutLineScience } from "react-icons/md";

import courses1 from "./assets/course.png"
import km from "./assets/logo_km.png"
import kemdikbud from "./assets/logo_kemdikbud.png"
import pkm from "./assets/logo_pkm.png"
import ristekdikti from "./assets/logo_ristekdikti.png"
import simbelmawa from "./assets/logo_simbelmawa.png"
import its from "./assets/logo_its.png"

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
        link: "Program",
    },
    {
        id: 4,
        href: "teacher",
        link: "Mentor",
    },
    {
        id: 5,
        href: "teacher",
        link: "News",
    },
    {
        id: 6,
        href: "contact",
        link: "Contact",
    },
];

export const categories = [
    {
        id: 1,
        icon: <FiPenTool />,
        category: "Tanya Data Talks",
    },
    {
        id: 2,
        icon: <FaLaptopCode />,
        category: "Open Class",
    },
    {
        id: 3,
        icon: <FaLaptopCode />,
        category: "Career Coaching",
    },
]

export const courses = [
    {
        id: 1,
        image: courses1,
        category: "Data Science",
        title: "Data Stimulate",
        rating: 4.9,
        participants: 500,
        price: 105
    },
    {
        id: 2,
        image: courses1,
        category: "Data Science",
        title: "Belajar Excel Dasar",
        rating: 4.9,
        participants: 900,
        price: 105
    },
    {
        id: 3,
        image: courses1,
        category: "Data Science",
        title: "Belajar Excel Menengah",
        rating: 4.9,
        participants: 900,
        price: 105
    },
    {
        id: 4,
        image: courses1,
        category: "Data Science",
        title: "Belajar Excel Mahir",
        rating: 4.9,
        participants: 900,
        price: 105
    },
    
];


export default logo;
export const logos = [logo];

export const logosUniv = [
    {
      name: 'Kemdikbud',
      imageUrl: kemdikbud, // Ganti dengan URL logo asli
    },
    {
      name: 'Kampus Merdeka',
      imageUrl: km, // Ganti dengan URL logo asli
    },
    {
      name: 'PKM',
      imageUrl: pkm, // Ganti dengan URL logo asli
    },
    {
        name: 'Ristekdikti',
        imageUrl: ristekdikti, // Ganti dengan URL logo asli
    },
    {
        name: 'Simbelmawa',
        imageUrl: simbelmawa, // Ganti dengan URL logo asli
    },
    {
        name: 'ITS',
        imageUrl: its, // Ganti dengan URL logo asli
    },
    
  ];
  


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
