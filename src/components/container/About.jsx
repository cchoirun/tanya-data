import React, { useEffect } from "react";
import about from "../../assets/About.png";
import about_img from "../../assets/About-img.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS AOS

const About = () => {
  useEffect(() => {
    AOS.init({duration: 800});
  }, []);

  return (
    <div className="py-16 text-black " id="about">
      <div 
        className="container grid gap-8 mx-auto md:grid-cols-2 place-items-center"
        data-aos="fade-up"
      >
        <div className="w-[60%]">
          <img src={about_img} alt="" data-aos="fade-right"/>
        </div>
        <div data-aos="fade-left">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Mengapa tanya data?
          </div>
          <p className="mb-4 text-sm leading-7 text-gray-800">
           Tanya data memberikan pelatihan, pembelajaran, serta seminar terkait data yang dapat membantumu baik lomba maupun pekerjaan. </p>
          <button className="px-6 py-3 text-sm font-bold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-700">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;


