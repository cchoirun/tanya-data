import React from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";

const Course = ({ image, category, title, participants, rating, price }) => {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md" // Layout flex column untuk mengisi tinggi penuh
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="relative w-[300px] "> {/* Container untuk gambar dengan posisi relatif */}
        <motion.img
          src={image}
          alt=""
          className="object-cover w-full h-48" // Sesuaikan tinggi dan atur object-fit menjadi cover
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />
        <div className="absolute px-2 py-1 text-xs text-white bg-blue-500 rounded-md top-2 left-2">
          {category}
        </div>
      </div>
      <div className="flex flex-col flex-grow p-4"> {/* Layout flex column dan flex-grow untuk konten */}
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>
        <p className="mb-4 text-sm text-gray-600">
          {participants} peserta · {rating} bintang
        </p>
        <button className="px-4 py-2 mt-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Join Course
        </button>
      </div>
      <div className="py-2 text-center bg-gray-200">
        <span className="text-xl font-semibold">${price}</span>
      </div>
    </motion.div>
  );
};

export default Course;
