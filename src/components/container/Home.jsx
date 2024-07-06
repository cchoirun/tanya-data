// import React from "react";
// import hero from "../../assets/img-hero.png"
// import bg_hero from "../../assets/bg-hero.png"
import {logos, logosUniv} from "../../Data"
// import { Link } from "react-router-dom";
// import { motion } from 'framer-motion';

// const Home = () => {
//     return( 
//     <div className="section" id="home">
//         <div className="items-center md:flex">
//             <div className="">
//                 <div className="mb-4 text-xs font-bold text-blue_main">{" "}your e-learning partner</div>
//                 <div className="sm:text-[3.5rem] text-[2rem] font-bold ">
//                      Belajar Data? <br/> ya di <span className=" text-blue_main">TanyaData</span>
//                 </div>
//                 {/* <p className="max-w-sm text-sm leading-7 text-gray-700 ">Tanya data merupakan platform untuk kamu belajar segala hal mengenai data.</p> */}
//                 <div className="mt-6">
//         <motion.button
//           className="px-6 py-3 mr-4 text-sm font-bold text-white rounded-lg bg-blue_main"
//           whileHover={{backgroundColor: "#2563eb" }} // Perkecil scale untuk efek hover yang lebih halus
//           whileTap={{ scale: 0.95 }} // Perkecil scale untuk efek tap yang lebih halus
//           transition={{ duration: 0.2, ease: "easeOut" }} // Transisi lebih cepat dan halus
//         ><Link to="/login">
//         Mulai</Link>
          
//         </motion.button>
//         <motion.button
//           className="px-6 py-3 text-sm font-bold border border-gray-600 border-solid rounded-lg"
//           whileHover={{backgroundColor: "#f3f4f6" }} // Perkecil scale untuk efek hover yang lebih halus
//           whileTap={{ scale: 0.95 }} // Perkecil scale untuk efek tap yang lebih halus
//           transition={{ duration: 0.2, ease: "easeOut" }} // Transisi lebih cepat dan halus
//         >
//           Tentang Kami
//         </motion.button>
//       </div>
//             </div>
//             <div className="md:w-[60%]">
//                 <img src={bg_hero} alt="" />
//             </div>
//         </div>
        

//       {/* <div className="mt-20">
//         <p className="text-xl text-center">
//           Supported by{' '}
//           <span className="text-blue_main">100+ leading universities and companies</span>
//         </p>
//         <motion.div
//           className="flex gap-4 mt-8 overflow-hidden"
//           initial={{ x: -100 }} // Mulai dari posisi tersembunyi
//           animate={{ x: 0 }} // Animasi geser ke kanan
//           transition={{ duration: 1, ease: 'easeInOut' }} // Transisi halus
//         >
//           {logosUniv.map((logo, index) => (
//             <motion.img
//               key={index}
//               src={logo.imageUrl}
//               alt={logo.name}
//               className="object-contain w-24 h-24"
//               whileHover={{ scale: 1.1 }} // Efek hover perbesar
//               transition={{ type: 'spring', stiffness: 300, damping: 10 }} // Transisi spring
//             />
//           ))}
//         </motion.div>
//         </div> */}
//     </div>
//     );
// };

// export default Home;

import React from "react";
import hero from "../../assets/img-hero.png";
import bg_hero from "../../assets/bg-hero.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="px-6 pt-24 mb-10 bg-gradient-to-r from-blue-100 to-blue-200 md:pt-32 md:px-12 lg:px-24">
      <div className="container grid items-center gap-12 mx-auto md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-2 text-xs font-bold text-black">your e-learning partner</p>
          <h1 className="mb-8 text-4xl font-bold text-black md:text-6xl">
            Belajar Data? <br />
            ya di <span className="text-blue-700">TanyaData</span>
          </h1>
          <p className="max-w-md mb-8 text-lg text-black">
            TanyaData adalah platform untuk kamu belajar segala hal mengenai data.
          </p>
          <motion.button
            className="px-6 py-3 mr-4 text-sm font-bold text-white bg-blue-700 rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Link to="/login">Mulai</Link>
          </motion.button>
          <motion.button
            className="px-6 py-3 text-sm font-bold text-black border border-blue-700 rounded-lg shadow-md hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Tentang Kami
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <img src={bg_hero} alt="Hero" className="w-full rounded-lg " /> 
          
        </motion.div>
      </div>
      <div className="items-center text-center bg-white mt-36">
  <p className="text-xl">Supported by</p>
  <motion.div
    className="flex flex-wrap justify-center gap-4 py-4 mt-4 overflow-hidden " // Tambahkan flex-wrap
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
    {logosUniv.map((logo, index) => (
      <motion.img
        key={index}
        src={logo.imageUrl}
        alt={logo.name}
        className="flex-shrink-0 object-contain w-24 h-24" // Tambahkan flex-shrink-0
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      />
    ))}
  </motion.div>
</div>

    </section>
  );
};

export default Home;
