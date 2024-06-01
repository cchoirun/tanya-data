import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
    return(
        <div className="section" id="contact">
            <div className="text-center max-w-[600px] mx-auto">
                <div className="mb-5 text-2xl font-bold sm:text-3xl ">
                    Contact Us Now
                </div>
                <p className="text-sm leading-7 text-gray-500">
                    Hubungi lebih lanjut apabila ada yang ingin ditanyakan.
                </p>
                <motion.form initial ={{scale: 0.9}} whileInView = {{scale: 1}} transition={{duration: 0.3}} className="mt-5">
                    <input type="email" placeholder="Enter your email address" className="p-2 text-sm shadow-md outline-none sm:p-3 sm:w-72 w-60"/>
                    <button className="p-2 text-sm font-bold text-white shadow-md bg-blue_main sm:p-3">Subscribe</button>
                </motion.form>
            </div>
        </div>
    )
};

export default Contact;