import React from "react";
import {AiOutlineUser, AiOutlineStar} from "react-icons/ai";

const Course = ({image, category, title, participants, rating, price}) => {
    return( <div className=" p-2 shadow-lg min-w-[15rem] bg-gray-300 rounded-md">
            <img src={image} alt="" />
            <div className="mt-2 text-xs text-blue_main">{category}</div>
            <div className="mt-2 text-sm font-bold" >{title}</div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="p-1 bg-gray-400 rounded-full ">
                        <AiOutlineUser className=" text-blue_main"/>
                    </div>
                    <div className="text-sm font-semibold">{participants}</div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-1 rounded-full bg-slate-300">
                        <AiOutlineStar className=" text-orange_main"/>
                    </div>
                    <div className="text-sm font-medium ">{rating}</div>
                </div>
                <div className="text-sm font-medium ">${price}</div>
            </div>
        </div>
        );
};

export default Course;