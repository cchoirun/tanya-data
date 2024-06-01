import React from "react";
import {
    BsFacebook,
    BsInstagram,
    BsTwitterX,
    BsTiktok
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div
            initial={{height : "auto"}}
            whileInView={{height: "auto"}}
            transition={{duration: 1}}
            className="p-10 bg-blue_main"
        >
            <div className="grid grid-cols-1 gap-8 text-white md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 place-items-start">
                <div>
                    <div className="mb-6 font-bold ">Tanya Data</div>
                    <p className="text-sm leading-7">Tanya data merupakan platform belajar interaktif terkait data yang diperuntukkan untuk kamu yang ingin belajar terkait data.</p>
                </div>
                <div>
                    <div className="mb-6 font-bold ">Services</div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="text-sm hover:underline">Web Design</a>
                        <a href="" className="text-sm hover:underline">Web Development</a>
                        <a href="" className="text-sm hover:underline">{" "}Science</a>
                        <a href="" className="text-sm hover:underline">Digital Marketing</a>
                    </div>
                </div>
                <div>
                    <div className="mb-6 Font-bold">Company</div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="text-sm hover:underline">Privacy Policy</a><a href="" className="text-sm hover:underline">Sitemap</a><a href="" className="text-sm hover:underline">Careers</a><a href="" className="text-sm hover:underline">Terms & Conditions</a>
                    </div>
                </div>
                <div>
                    <div className="mb-6 font-bold">Follow Us</div>
                    <div className="mb-4 text-sm">tanyadata@gmail.com</div>
                    <div className="text-sm">+876576829132</div>
                    <div className="flex gap-4 mt-4">
                        <a href="" className="text-xl hover:scale-110">
                            <BsFacebook/></a><a href="" className="text-xl hover:scale-110"><BsInstagram/></a><a href="" className="text-xl hover:scale-110"><BsTwitterX/></a><a href="" className="text-xl hover:scale-110"><BsTiktok/></a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;