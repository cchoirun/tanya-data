// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const Categories = ({icon, category}) => {
//     return (
//         <motion.div
//         className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md"
//       whileHover={{ scale: 1.05 }}
//       transition={{ type: "spring", stiffness: 300, damping: 10 }}>
//             <div className="flex flex-col items-center gap-4 p-8 bg-gray-300 rounded-md">
//                 <div className="text-4xl text-blue_main">{icon}</div>
//                 <div>{category}</div>
//                 <Link to="/talks"><a href="" className="text-sm text-gray-600 hover:underline">View More</a>
//                 </Link>
//             </div>
//         </motion.div>
//     );
// }

// export default Categories;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Categories = ({ icon, category }) => {
  return (
    <motion.div
      className="flex flex-col overflow-hidden shadow-lg rounded-xl" // Ubah bentuk menjadi lebih rounded
      whileHover={{ scale: 1.02 }} // Tambah skala hover
      transition={{ type: "spring", stiffness: 500, damping: 10}}
    >
      <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-blue-200 to-blue-400 rounded-t-xl"> 
        <div className="text-5xl text-white">{icon}</div> {/* Ubah warna dan ukuran icon */}
        <h2 className="text-xl font-semibold text-white">{category}</h2> {/* Tambah judul */}
      </div>
      <div className="p-4 bg-white rounded-b-xl"> {/* Ganti latar belakang dan beri padding */}
        <Link to="/talks">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            View More
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Categories;
