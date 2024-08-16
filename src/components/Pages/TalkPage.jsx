// import React fr

import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/openclass.png"; // Ganti dengan gambar hero Anda
import Navbar from "../Navbar/Navbar";
import Footer from "../container/Footer";
import Talk from "../container/Program/Talk";
import { openclass } from "../../Data";

const TalkPage = () => {
  return (
    <div>
      <Navbar/>
      {/* Hero Section */}
      <section className="py-16 bg-blue-100 md:py-24">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Open Class
            </h1>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              Rangkaian webinar interaktif untuk meningkatkan kemampuan Anda di bidang data science dan machine learning.
            </p>
            <a href="http://intip.in/tanyaDataTalks2024">
              <button className="px-8 py-3 font-bold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600">
                Daftar Sekarang
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 gap-3 mt-12 section md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
          
        {openclass.map((talk) => (
          <Talk key={talk.id} {...talk} />
        ))}
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
            Siap Meningkatkan Kemampuan Anda?
          </h2>
          <a href="http://intip.in/tanyaDataTalks2024">
            <button className="px-8 py-3 font-bold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600">
              Daftar Sekarang
            </button>
          </a>
        </div>
      </section> */}
      <Footer/>
    </div>
  );
};

export default TalkPage;
