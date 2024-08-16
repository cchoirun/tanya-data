import React from "react";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Talk = ({ image, category, title, link }) => {
  return (
    <motion.div
      className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="relative w-full">
        <motion.img
          src={image}
          alt=""
          className="object-cover w-full h-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />
        <div className="absolute px-2 py-1 text-xs text-white bg-blue-500 rounded-md top-2 left-2">
          {category}
        </div>
      </div>
      <div className="flex flex-col flex-auto p-6">
        <div className="">
            <h2 className="mb-2 text-lg font-semibold">{title}</h2>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <a href={link}>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Join Course
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Talk;