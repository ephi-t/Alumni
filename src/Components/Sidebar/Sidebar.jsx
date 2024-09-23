import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoGrid, IoDocumentText } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaUser, FaDollarSign, FaBell } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";
import { FcSurvey } from "react-icons/fc";

const Sidebar = ({ isSidebarOpen }) => {
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);
  const [isDonationDropdownOpen, setIsDonationDropdownOpen] = useState(false);
  const [isSurveyDropOpen, setSurveyIsDropdownOpen] = useState(false);

  const toggleEventDropdown = () => {
    setIsEventDropdownOpen(!isEventDropdownOpen);
  };

  const toggleSurveyDropdown = () => {
    setSurveyIsDropdownOpen(!isSurveyDropOpen);
  };

  const toggleJobDropdown = () => {
    setIsJobDropdownOpen(!isJobDropdownOpen);
  };

  const toggleDonationDropdown = () => {
    // New toggle function for Donations
    setIsDonationDropdownOpen(!isDonationDropdownOpen);
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-28 bg-white border-r border-gray-200 sm:translate-x-0 transition-transform ${
        isSidebarOpen ? " translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-bold">
          <li>
            <NavLink
              to="/dashboard"
              className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
            >
              <IoGrid className="mr-2" />
              DashBoard
            </NavLink>
          </li>

          {/* Event Dropdown */}
          <li>
            <button
              onClick={toggleEventDropdown}
              className="p-2 text-gray-900 flex items-center justify-between hover:bg-gray-100 rounded-lg w-full"
            >
              <div className="flex items-center">
                <SlCalender className="mr-2" />
                Event
              </div>
              <span
                className={`${
                  isEventDropdownOpen ? "rotate-180" : ""
                } transition-transform`}
              >
                &#9660; {/* Arrow icon */}
              </span>
            </button>
            {isEventDropdownOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <NavLink
                    to="/event/createevent"
                    className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
                  >
                    Create Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/event/manageevent"
                    className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
                  >
                    Manage Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/event/pendingevent"
                    className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
                  >
                    Pending Event
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Job Dropdown */}
          <li>
            <button
              onClick={toggleJobDropdown}
              className="p-2 text-gray-900 flex items-center justify-between hover:bg-gray-100 rounded-lg w-full"
            >
              <div className="flex items-center">
                <IoDocumentText className="mr-2" />
                Job
              </div>
              <span
                className={`${
                  isJobDropdownOpen ? "rotate-180" : ""
                } transition-transform`}
              >
                &#9660; {/* Arrow icon */}
              </span>
            </button>
            {isJobDropdownOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <NavLink
                    to="/job/createjob"
                    className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
                  >
                    Create Job
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/job/managejob"
                    className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
                  >
                    Manage Job
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Donation Dropdown */}
          <li>
            <button
              onClick={toggleDonationDropdown} // Using the new toggle function
              className="p-2 text-gray-900 flex items-center justify-between hover:bg-gray-100 rounded-lg w-full"
            >
              <div className="flex items-center">
                <FaDollarSign className="mr-2" />
                Donations
              </div>
              <span
                className={`${
                  isDonationDropdownOpen ? "rotate-180" : ""
                } transition-transform`}
              >
                &#9660; {/* Arrow icon */}
              </span>
            </button>
            {isDonationDropdownOpen && ( // Render dropdown items when open
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <NavLink
                    to="/donations/createdonation"
                    className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
                  >
                    Create Donation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/donations/managedonation"
                    className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
                  >
                    Manage Donation
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={toggleSurveyDropdown} // Using the new toggle function
              className="p-2 text-gray-900 flex items-center justify-between hover:bg-gray-100 rounded-lg w-full"
            >
              <div className="flex items-center">
                <FcSurvey className="mr-2 " />
                Survey
              </div>
              <span
                className={`${
                  isSurveyDropOpen ? "rotate-180" : ""
                } transition-transform`}
              >
                &#9660; {/* Arrow icon */}
              </span>
            </button>
            {isSurveyDropOpen && ( // Render dropdown items when open
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <NavLink
                    to="/survey/createsurvey"
                    className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
                  >
                    Create Survey
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/donations/managesurvey"
                    className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
                  >
                    Manage Survey
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/profile"
              className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
            >
              <FaUser className="mr-2" />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alumni"
              className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
            >
              <HiOutlineUserGroup className="mr-2" />
              Alumni
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/currentstudent"
              className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
            >
              <HiOutlineUserGroup className="mr-2" />
              Current Student
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg"
            >
              <FaBell className="mr-2" />
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink className="p-2 text-gray-900 flex items-center hover:bg-gray-100 rounded-lg">
              <IoMdLogOut className="mr-2" />
              LogOut
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
