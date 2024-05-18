import React, { useState } from "react";
import {BsChevronDown} from "react-icons/bs";
import {motion, AnimatePresence} from "framer-motion";
const Accordion = ({id, title}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (id) => {
        setActiveIndex(id === activeIndex ? null : id);
    };
    return (
        <div className="pb-8">
            <div className="flex items-center justify-between">
                <div className="text-base font-medium sm:text-xl">{title}</div>
                <BsChevronDown className={`${id === activeIndex ? "rotate-180" : "rotate-0"} cursor-pointer transition-all `}
                onClick={() => handleClick(id)}
                />
            </div>
            <AnimatePresence>
                {id === activeIndex &&(
                     <motion.div initial={{height: 0}} animate={{height: "auto"}} exit={{height: 0}} transition={{duration: 0.2}} style={{overflow: "hidden"}} className="pt-4">
                        <p className="text-sm leading-7 text-gray-500">Lorem ipsum dolor sit amet Dolorem, at, voluptates rem labore eaque cum, sed tempore consequuntur dolor a aliquam ullam quasi eveniet distinctio nemo magnam illo dignissimos unde sit minus. Impedit, unde deleniti.</p>
                     </motion.div>)}
                
            </AnimatePresence>
        </div>
    );
};

export default Accordion;