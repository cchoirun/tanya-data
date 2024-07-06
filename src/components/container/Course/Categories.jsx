import React from "react";
import { motion } from "framer-motion";

const Categories = ({icon, category}) => {
    return (
        <motion.div
        className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}>
            <div className="flex flex-col items-center gap-4 p-8 bg-gray-300 rounded-md">
                <div className="text-4xl text-blue_main">{icon}</div>
                <div>{category}</div>
                <a href="" className="text-gray-600 text- sm">View More</a>
            </div>
        </motion.div>
    );
}

export default Categories;