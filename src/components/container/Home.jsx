import React from "react";
import hero from "../../assets/img-hero.png"
import {logos, logosUniv} from "../../Data"
import { motion } from 'framer-motion';

const Home = () => {
    return( 
    <div className="section" id="home">
        <div className="items-center md:flex">
            <div>
                <div className="mb-4 text-xs font-bold text-blue_main">{" "}your e-learning partner</div>
                <div className="sm:text-[2.5rem] text-[1.825rem] font-bold ">
                     Belajar Data? <br/> ya di <span className=" text-blue_main">TanyaData</span>
                </div>
                <p className="max-w-sm text-sm leading-7 text-gray-700 ">Tanya data merupakan platform untuk kamu belajar segala hal mengenai data.</p>
                <div className="mt-6">
        <motion.button
          className="px-6 py-3 mr-4 text-sm font-bold text-white rounded-lg bg-blue_main"
          whileHover={{backgroundColor: "#2563eb" }} // Perkecil scale untuk efek hover yang lebih halus
          whileTap={{ scale: 0.95 }} // Perkecil scale untuk efek tap yang lebih halus
          transition={{ duration: 0.2, ease: "easeOut" }} // Transisi lebih cepat dan halus
        >
          Get Started
        </motion.button>
        <motion.button
          className="px-6 py-3 text-sm font-bold border border-gray-600 border-solid rounded-lg"
          whileHover={{backgroundColor: "#f3f4f6" }} // Perkecil scale untuk efek hover yang lebih halus
          whileTap={{ scale: 0.95 }} // Perkecil scale untuk efek tap yang lebih halus
          transition={{ duration: 0.2, ease: "easeOut" }} // Transisi lebih cepat dan halus
        >
          Discover
        </motion.button>
      </div>
            </div>
            <div className="md:w-[60%]">
                <img src={hero} alt="" />
            </div>
        </div>
        

      <div className="mt-12">
        <p className="text-xl text-center">
          We collaborate with{' '}
          <span className="text-blue_main">100+ leading universities and companies</span>
        </p>
        <motion.div
          className="flex gap-4 mt-8 overflow-hidden"
          initial={{ x: -100 }} // Mulai dari posisi tersembunyi
          animate={{ x: 0 }} // Animasi geser ke kanan
          transition={{ duration: 1, ease: 'easeInOut' }} // Transisi halus
        >
          {logosUniv.map((logo, index) => (
            <motion.img
              key={index}
              src={logo.imageUrl}
              alt={logo.name}
              className="object-contain w-24 h-24"
              whileHover={{ scale: 1.1 }} // Efek hover perbesar
              transition={{ type: 'spring', stiffness: 300, damping: 10 }} // Transisi spring
            />
          ))}
        </motion.div>
        </div>
    </div>
    );
};

export default Home;