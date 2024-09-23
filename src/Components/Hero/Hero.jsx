import React, { useState } from "react";
import heroimg from "../../assets/hero.png";

import about_img from "../../assets/about.png";
import img1 from "../../assets/job-pic.jpg";
import event from "../../assets/event.jpg";
import donation from "../../assets/donation.jpg";
import survey from "../../assets/survey.jpg";
import graduation from "../../assets/Graduation.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";

const Hero = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="">
      {}
      <div
        className="w-full min-h-screen text-white flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${heroimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-2 text-center max-w-[800px]">
          <h1 className="text-5xl font-semibold">
            Welcome to DBU Alumni Management System
          </h1>
          <p className=" text-base max-w-[700px] mx-auto my-4 leading-6">
            Connect with a vibrant community of past and present students,
            explore job opportunities, and engage in events that bring us closer
            together. Our platform is designed to keep you connected to the
            heart of your alma mater. Together, we build a future rooted in
            shared experiences and lifelong relationships.
          </p>
          <div className=" flex gap-5 justify-center">
            <Link
              to="/login"
              className=" bg-white text-gray-900 py-3 px-9 text-base font-bold rounded-full cursor-pointer border-0"
            >
              Login
            </Link>

            <Link
              to="/createaccount"
              className=" bg-white text-gray-900 py-3 px-9 text-base rounded-full cursor-pointer border-0 font-bold"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>

      <div className="  text-center mx-auto my-16 px-[10%]">
        <p className="text-indigo-800 text-2xl font-semibold uppercase tracking-wide">
          Alumni Features
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
          Stay Connected, Engage, and Grow
        </h2>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-between mx-auto my-24 lg:w-11/12 px-[10%] gap-8 lg:gap-16">
        <div class="lg:flex-1 w-full lg:w-auto mb-8 lg:mb-0">
          <img src={about_img} alt="" class="w-full rounded-lg" />
        </div>
        <div class="lg:flex-1 w-full lg:w-auto">
          <h1 class="text-3xl lg:text-4xl font-bold mb-4">
            Stay Connected With Alumni Network
          </h1>
          <p class="text-gray-600">
            "Even though our platform doesn't offer live chat, staying connected
            has never been easier. Through the alumni list, you can access the
            contact information of fellow graduates, including their emails,
            making it simple to reach out and reconnect. Whether you’re
            searching for old classmates or networking for career opportunities,
            you’ll have the resources to maintain and grow your alumni
            relationships. Our system keeps you engaged with your alma mater
            while offering a space to share experiences and support each other
            professionally and personally."
          </p>
        </div>
      </div>

      <section className="px-4 md:px-[20%] mx-[2%]  bg-blue-200 rounded-3xl ">
        <div className=" py-12 ">
          <ScrollTrigger
            onEnter={() => {
              setCounterState(true);
            }}
            onExit={() => {
              setCounterState(false);
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-6">
              <div>
                <h2 className="text-6xl font-bold text-[#262626]">
                  {counterState && <CountUp start={0} end={95} />}
                  <span className="text-white">+</span>
                </h2>
                <p className="py-2 text-2xl font-medium p-4 rounded-md">
                  {" "}
                  {/* White background for text */}
                  Total Alumni
                </p>
              </div>
              <hr className="md:hidden" />
              <div>
                <h2 className="text-6xl font-bold text-[#262626]">
                  {counterState && <CountUp start={0} end={10} />}
                  <span className="text-white">+</span>
                </h2>
                <p className="py-2 text-2xl font-medium p-4 rounded-md">
                  Total Event
                </p>
              </div>
              <hr className="md:hidden" />
              <div>
                <h2 className="text-6xl font-bold text-[#262626]">
                  {counterState && <CountUp start={0} end={25} />}
                  <span className="text-white">+</span>
                </h2>
                <p className="py-2 text-2xl font-medium p-4 rounded-md">
                  Total Job Posts
                </p>
              </div>
              <hr className="md:hidden" />
              <div>
                <h2 className="text-6xl font-bold text-[#262626]">
                  {counterState && <CountUp start={0} end={45} />}
                  <span className="text-white">+</span>
                </h2>
                <p className="py-2 text-2xl font-medium p-4 rounded-md">
                  Total Students
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      <section className="mt-6 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-[48px] font-bold mb-16">
            Features of the Alumni Management System
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-110 transition duration-300 ease-in-out">
              <img
                src={img1}
                alt="Post Job Opportunities"
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <div className="py-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                  Post Job Opportunities
                </h3>
                <p className="text-gray-600 mb-4 text-lg">
                  Alumni can post job openings to help fellow graduates find
                  employment opportunities within the DBU network.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-110 transition duration-300 ease-in-out">
              <img
                src={event}
                alt="Create Events"
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <div className="py-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                  Create Events
                </h3>
                <p className="text-gray-600 mb-4 text-lg">
                  Organize and promote events to stay connected with the DBU
                  community. Share your events and invite fellow alumni.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-110 transition duration-300 ease-in-out">
              <img
                src={donation}
                alt="Make Donations"
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <div className="py-4">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                  Make Donations
                </h3>
                <p className="text-gray-600 mb-4 text-lg">
                  Support the university and its initiatives by making
                  donations. Your contributions help us grow and improve.
                </p>
              </div>
            </div>

            {/* New Survey Method Feature */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-110 transition duration-300 ease-in-out">
              <img
                src={survey}
                alt="Conduct Surveys"
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <div className="py-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                  Conduct Surveys
                </h3>
                <p className="text-gray-600 mb-4 text-lg">
                  Create and distribute surveys to gather valuable feedback from
                  alumni. Use the insights to improve programs and foster a
                  stronger community.
                </p>
              </div>
            </div>

            {/* New Graduation Support Feature */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-110 transition duration-300 ease-in-out">
              <img
                src={graduation} // Make sure to import this image
                alt="Graduation Support"
                className="w-full h-96 object-cover rounded-t-lg"
              />
              <div className="py-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                  Reconnect With Friends
                </h3>
                <p className="text-gray-600 mb-4 text-lg">
                  Use our alumni directory to find and connect with former
                  classmates. Whether you're looking to network professionally
                  or catch up personally, our platform makes it easy to reach
                  out and reconnect with your fellow alumni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
