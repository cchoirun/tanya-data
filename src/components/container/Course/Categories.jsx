import React from "react";

const Categories = ({icon, category}) => {
    return (
        <div className="flex flex-col items-center gap-4 p-8 bg-gray-300 rounded-md">
            <div className="text-4xl text-blue_main">{icon}</div>
            <div>{category}</div>
            <a href="" className="text-gray-600 text- sm">View More</a>
        </div>
    );
}

export default Categories;