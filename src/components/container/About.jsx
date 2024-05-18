import React from "react";
import about from "../../assets/About.png"

const About = () => {
    return <div className="section" id="about">
        <div className="grid gap-8 md:grid-cols-2 place-items-center">
            <div className="w-[60%]">
                <img src={about} alt="" />
            </div>
            <div>
                <div className=" font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
                Mengapa tanya data?    
                </div>
                <p className="mb-4 text-sm leading-7 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed dolore ut mollitia quibusdam maiores repellat blanditiis, voluptates saepe quisquam optio, omnis repellendus cum voluptatem molestias vel est accusamus inventore.</p>
                <button className="px-6 py-3 text-sm font-bold border border-gray-600 border-solid rounded-lg">Know More</button>
            </div>
        </div>
    </div>;
};

export default About;