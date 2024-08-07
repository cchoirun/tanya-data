import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
// import { BsBarChartLine } from "react-icons/bs";
// import { MdOutLineScience } from "react-icons/md";

import courses1 from "./assets/course.png"
import oc1 from "./assets/oc1.png"
import oc2 from "./assets/oc2.png"
import oc3 from "./assets/oc3.png"
import oc4 from "./assets/oc4.png"
import tdt1 from "./assets/tdt1.png"
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
        href: "/",
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
        href: "news",
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
        image: oc1,
        category: "Computer Vision",
        title: "Introduction to CV",
        rating: 4.9,
        participants: 100,
        price: 0
    },
    {
        id: 2,
        image: tdt1,
        category: "Data Science",
        title: "Tanya Data Talks",
        rating: 4.9,
        participants: 100,
        price: 0
    },
    {
        id: 3,
        image: oc3,
        category: "Computer Vision",
        title: "Image Classification",
        rating: 4.9,
        participants: 100,
        price: 20
    },
    {
        id: 4,
        image: oc4,
        category: "Computer Vision",
        title: "Advanced CV",
        rating: 4.9,
        participants: 100,
        price: 20
    },
    
];

export const openclass = [
    {
        id: 1,
        image: oc1,
        category : "Computer Vision",
        title: "Open Class 1 : Introduction to Computer Vision",
        rating: 4.5,
        participants: 100,
        price: 0
    },
    {
        id: 2,
        image: oc2,
        category : "Computer Vision",
        title: "Open Class 2 : Data in Computer Vision",
        rating: 4.5,
        participants: 100,
        price: 0
    },{
        id: 1,
        image: oc3,
        category : "Computer Vision",
        title: "Open Class 3 : Image Classification with Deep Learning",
        rating: 4.7,
        participants: 100,
        price: 20
    },{
        id: 1,
        image: oc4,
        category : "Computer Vision",
        title: "Open Class 4 : Advanced Computer Vision",
        rating: 4.9,
        participants: 100,
        price: 20
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
