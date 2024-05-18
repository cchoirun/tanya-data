import React from "react";
import Accordion from "./Accordion";
import { accordions } from "../../Data";

const Faqs = () => {
    return (
    <div className=" section" id="faqs">
        <div className="text-center my-8 font-semibold sm:text-[1.875rem] text-[1.5rem]">
            Frequently Asked Question
        </div>
        <div className=" mt-12 max-w-[700px] mx-auto">
            {accordions.map((accordion) => {
                return <Accordion key={accordion.id}
                {...accordion} />;
            })}
        </div>
    </div>
    );
};

export default Faqs;