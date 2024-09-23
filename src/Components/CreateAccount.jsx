import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaVenusMars } from "react-icons/fa";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    email: "",
    gender: "",
    password: "",
    userType: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [showStudentUpload, setShowStudentUpload] = useState(false);
  const [showAlumniUpload, setShowAlumniUpload] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleUserTypeChange = (e) => {
    const type = e.target.value;
    setFormData((prev) => ({
      ...prev,
      userType: type,
    }));

    if (type === "Student") {
      setShowStudentUpload(true);
      setShowAlumniUpload(false);
    } else if (type === "Alumni") {
      setShowStudentUpload(false);
      setShowAlumniUpload(true);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.middleName) newErrors.middleName = "Middle Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.userType) newErrors.userType = "User Type is required";

    if (formData.userType === "Student" && !formData.file) {
      newErrors.file = "Student ID image is required";
    }
    if (formData.userType === "Alumni" && !formData.file) {
      newErrors.file = "Alumni tempo image is required";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("lastName", formData.lastName);
    formDataToSubmit.append("firstName", formData.firstName);
    formDataToSubmit.append("middleName", formData.middleName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("gender", formData.gender);
    formDataToSubmit.append("password", formData.password);
    formDataToSubmit.append("userType", formData.userType);
    if (formData.file) {
      formDataToSubmit.append("file", formData.file);
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error("Failed to create account");
      }

      const result = await response.json();
      console.log("Account created successfully:", result);
    } catch (error) {
      console.error("Error submitting the form:", error.message);
    }
  };

  return (
    <section className="mt-28 flex flex-col items-center justify-center min-h-screen bg-[rgb(255, 255, 255);]">
      <div className="w-full md:w-2/3 bg-white p-8 shadow-md">
        <h2 className="text-3xl font-bold text-blue-600  mb-6">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Last Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Last Name <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                placeholder="Last Name"
              />
            </div>
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* First Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              First Name <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                placeholder="First Name"
              />
            </div>
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Middle Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Middle Name <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.middleName ? "border-red-500" : ""
                }`}
                placeholder="Middle Name"
              />
            </div>
            {errors.middleName && (
              <p className="text-red-500 text-xs mt-1">{errors.middleName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="example@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Gender <span className="text-red-600">*</span>
            </label>
            <div>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md text-gray-700 ${
                  errors.gender ? "border-red-500" : ""
                }`}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
            )}
          </div>

          {/* User Type */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              User Type <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Student"
                  name="userType"
                  onChange={handleUserTypeChange}
                  className="mr-2"
                />
                Student
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Alumni"
                  name="userType"
                  onChange={handleUserTypeChange}
                  className="mr-2"
                />
                Alumni
              </label>
            </div>
            {errors.userType && (
              <p className="text-red-500 text-xs mt-1">{errors.userType}</p>
            )}
          </div>

          {/* Conditional Fields Based on User Type */}
          {showStudentUpload && (
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload ID Image (Student) *
              </label>
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.file ? "border-red-500" : ""
                }`}
              />
              {errors.file && (
                <p className="text-red-500 text-xs mt-1">{errors.file}</p>
              )}
            </div>
          )}

          {showAlumniUpload && (
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload Tempo Image (Alumni) *
              </label>
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.file ? "border-red-500" : ""
                }`}
              />
              {errors.file && (
                <p className="text-red-500 text-xs mt-1">{errors.file}</p>
              )}
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-10 px-4 py-2 border rounded-md text-gray-700 ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="********"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateAccount;
