import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { categories, courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course"; // Import komponen Course
import { popularCourses } from "../../../Data";

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="section" id="courses">
      <div className="text-center" data-aos="fade-up">
        <div className="mb-5 text-xl font-bold sm:text-2xl md:text-3xl">
          Our Top <span className="text-blue_main">Programs</span>
        </div>
        <p className="text-sm text-gray-600 leading-7 max-w-[700px] mx-auto">
          Pilih kategori-kategori yang kamu butuhkan untuk belajar data. Setiap kategori dipandu oleh Mentor-mentor berpengalaman di bidangnya.
        </p>
      </div>

      <div
        className="grid gap-4 mt-12 md:grid-cols-3 sm:grid-cols-2"
        data-aos="fade-up"
      >
        {categories.map((category) => (
          <Categories key={category.id} {...category} />
        ))}
      </div>

      <div className="mt-32 text-xl font-bold">Most Popular Courses</div>

      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
        {popularCourses.map((course) => (
          <Course key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
