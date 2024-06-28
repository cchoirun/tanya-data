import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";

const About = () => {
    useEffect(() => {
      AOS.init({duration: 800});
    }, []);}

const Courses = () => {
    return <div className="section" id="courses">
        <div className="text-center" data-aos="fade-up">
            <div className="mb-5 text-2xl font-bold sm:text-3xl">
                Our Top <span className=" text-blue_main">Categories</span>
            </div>
            <p className=" text-sm text-gray-600 leading-7 max-w-[700px] mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis minima natus, saepe quas eligendi nam labore unde dolore totam rerum sed quia molestiae sunt dignissimos. Adipisci libero, laborum praesentium ut ipsum quos soluta odio accusantium.</p>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-4 sm:grid-cols-2" data-aos="fade-up">
            {categories.map((category) => {
                return <Categories key={category.id}{...category}/>;
            })}
        </div>
        <div className="mt-32 text-xl font-bold ">Most Popular Courses</div>
        <div className="relative w-full py-4 mt-12 ">
            <div className=" flex gap-7 md:w-full sm:w-[170%] xs:w-[340%] w-[480%]">
                 {courses.map(course => {
                    return <Course key={course.id} {...course}/>
                 })}
            </div>
        </div>
    </div>;
};

export default Courses;