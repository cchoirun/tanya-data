// import React fr

import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/course.png"; // Ganti dengan gambar hero Anda
import Navbar from "../Navbar/Navbar";
import Footer from "../container/Footer";

const TalkPage = () => {
  return (
    <div>
      <Navbar/>
      {/* Hero Section */}
      <section className="py-16 bg-blue-100 md:py-24">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Tanya Data Talks
            </h1>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              Rangkaian webinar interaktif untuk meningkatkan kemampuan Anda di bidang data science dan machine learning.
            </p>
            <Link to="/daftar">
              <button className="px-8 py-3 font-bold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600">
                Daftar Sekarang
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <img src={heroImage} alt="Tanya Data Talks" className="rounded-lg shadow-md" />
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                Tentang Tanya Data Talks
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Tanya Data Talks adalah seri webinar yang dirancang untuk membantu Anda memahami konsep-konsep kunci dalam data science dan machine learning. 
                Setiap sesi akan dipandu oleh para ahli di bidangnya, yang akan berbagi pengetahuan dan pengalaman mereka.
              </p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Materi: Computer Vision
              </h3>
              <p className="mb-6 text-lg text-gray-700">
                Dalam sesi ini, Anda akan mempelajari dasar-dasar computer vision, mulai dari pengolahan citra hingga pengenalan objek. 
                Kami akan membahas algoritma terkini, teknik implementasi, dan aplikasi praktis computer vision dalam berbagai bidang.
              </p>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Dokumentasi dan Jadwal
              </h3>
              <p className="text-lg text-gray-700">
                Setiap sesi Tanya Data Talks akan direkam dan dokumentasinya akan tersedia bagi peserta terdaftar. 
                Jadwal lengkap dan informasi pendaftaran akan diumumkan melalui website dan media sosial Tanya Data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
            Siap Meningkatkan Kemampuan Anda?
          </h2>
          <Link to="/daftar">
            <button className="px-8 py-3 font-bold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600">
              Daftar Sekarang
            </button>
          </Link>
        </div>
      </section>
      <footer/>
    </div>
  );
};

export default TalkPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import heroImage from "../../assets/course.png";
// import hero_image from "../../assets/course.png"; 
// // import dokumentasiImage2 from "../../assets/dokumentasi2.jpg"; 

// const TalkPage = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="py-16 bg-blue-100 md:py-24">
//         {/* ... (bagian hero section lainnya) */}
//       </section>

//       {/* Course Details Section */}
//       <section className="py-16">
//         <div className="container px-4 mx-auto sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div>
//               <img
//                 src={heroImage}
//                 alt="Tanya Data Talks"
//                 className="rounded-lg shadow-md"
//               />
//             </div>
//             <div>
//               <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
//                 Tentang Tanya Data Talks
//               </h2>
//               {/* ... (bagian tentang Tanya Data Talks lainnya) */}

//               <h3 className="mb-4 text-xl font-semibold text-gray-900">
//                 Dokumentasi dan Jadwal
//               </h3>
//               <div className="flex flex-col gap-4 md:flex-row">
//                 <img
//                   src={hero_image}
//                   alt="Dokumentasi 1"
//                   className="w-full rounded-lg shadow-md md:w-1/2"
//                 />
//                 <img
//                   src={hero_image}
//                   alt="Dokumentasi 2"
//                   className="w-full rounded-lg shadow-md md:w-1/2"
//                 />
//               </div>
//               <p className="mt-4 text-lg text-gray-700">
//                 Setiap sesi Tanya Data Talks akan direkam dan dokumentasinya akan
//                 tersedia bagi peserta terdaftar. Jadwal lengkap dan informasi
//                 pendaftaran akan diumumkan melalui website dan media sosial Tanya
//                 Data.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-12 bg-gray-100">
//         {/* ... (bagian call to action lainnya) */}
//       </section>
//     </div>
//   );
// };

// export default TalkPage;

