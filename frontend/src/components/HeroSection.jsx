import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import Card from "./Card"; // Import the Card component

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="flex h-50 ">
      {/* Left half with content */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center w-[80%]">
          <div className="flex flex-col gap-5 my-10">
            <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
              No. 1 Job Orbit Website
            </span>
            <h1 className="text-5xl font-bold">
            Search, Connect, Secure  <br /> Get Your{" "}
              <span className="text-[#6A38C2]">Dream Jobs</span>
            </h1>
            <p className="text-xl font-semibold">
            Learn. Earn. Repeat. Your <span className="text-[#F83002]"> Success</span> Journey Starts Here
            </p>
            <div className="flex w-[80%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
              <input
                type="text"
                placeholder="Find your dream jobs"
                onChange={(e) => setQuery(e.target.value)}
                className="outline-none border-none w-full"
              />
              <Button
                onClick={searchJobHandler}
                className="rounded-r-full bg-[#6A38C2]"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right half with cards */}
      <div className="w-1/2 grid grid-cols-2 gap-4 p-24">
  <Card
    title="Interview preparation"
    subtitle="Gain Practical Experience"
    icons={['../public/images/one.png']}
    bgColor="#C7F7E5"
    navigateTo="/knowledge/internship" // Specify route
  />
  <Card
    title="Online Communities"
    subtitle="Guidance From Top Mentors"
    icons={['../public/images/five.png']}
    bgColor="#FFD9B8"
    navigateTo="/knowledge/mentorship"
  />
  <Card
    title="Projects-Practice"
    subtitle="Explore Diverse Careers"
    icons={['../public/images/six.png']}
    bgColor="#B8DBFF"
    navigateTo="/knowledge/projects"
  />
  <Card
    title="Courses"
    subtitle="Expand Knowledge Base"
    icons={['../public/images/two.png']}
    bgColor="#FFC8D9"
    navigateTo="/knowledge/course"
  />
  <Card
    title="Compete"
    subtitle="Battle For Excellence"
    icons={['../public/images/four.png']}
    bgColor="#FFE69B"
    navigateTo="/knowledge/compete"
  />
  <Card
    title="Test Your Knowledge"
    subtitle="Refine Skills Daily"
    icons={['../public/images/three.png']}
    bgColor="#D1C8FF"
    navigateTo="/knowledge/practice"
  />
</div>

    </div>
  );
};

export default HeroSection;
