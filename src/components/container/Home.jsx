import React from "react";
import hero from "../../assets/img-hero.png"
import {logos} from "../../Data"
const Home = () => {
    return( 
    <div className="section" id="home">
        <div className="items-center md:flex">
            <div>
                <div className="mb-4 text-xs font-bold text-blue_main">{" "}your e-learning partner</div>
                <div className="sm:text-[2.5rem] text-[1.825rem] font-bold ">
                     Belajar Data? <br/> ya di <span className=" text-blue_main">TanyaData</span>
                </div>
                <p className="max-w-sm text-sm leading-7 text-gray-700 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis et numquam illo dolores illum itaque repudiandae officiis sed cupiditate id.</p>
                <div className="mt-6">
                    <button className="px-6 py-3 mr-4 text-sm font-bold text-white rounded-lg bg-blue_main ">
                        Get Started
                    </button>
                    <button className="px-6 py-3 text-sm font-bold border border-gray-600 border-solid rounded-lg">Discover</button>
                </div>
            </div>
            <div className="md:w-[60%]">
                <img src={hero} alt="" />
            </div>
        </div>
        <div>
            <p className="text-xl text-center">We collaborate with {" "} <span className="text-blue_main">100+ leading universities and companies</span></p>
            <div></div>
        </div>
    </div>
    );
};

export default Home;