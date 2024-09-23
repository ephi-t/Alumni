import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiUpload } from "react-icons/fi";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(""); // Added state for location
  const [eventDate, setEventDate] = useState(new Date());
  const [eventImage, setEventImage] = useState(null);

  const handleImageChange = (e) => {
    setEventImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, description, location, eventDate, eventImage });
  };

  return (
    <div className="container flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-4/5 lg:w-3/5">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Title */}
          <div className="md:grid md:grid-cols-2 md:gap-4 space-y-4 sm:space-y-0">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Event Title
              </label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Event Date Picker */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Event Date & Time
              </label>
              <div className="mt-1">
                <DatePicker
                  selected={eventDate}
                  onChange={(date) => setEventDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="yyyy-MM-dd h:mm aa"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                  popperClassName="react-datepicker-left"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)} // Added location input
              required
            />
          </div>

          {/* Event Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Event Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
              <div className="space-y-1 text-center">
                <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="text-sm text-gray-600">
                  <label
                    htmlFor="eventImage"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="eventImage"
                      name="eventImage"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
              </div>
            </div>
          </div>

          {/* Create Post Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
