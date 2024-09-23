import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      const result = await response.json();
      console.log("Logged in successfully:", result);
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <section className="md:px-[10%] bg-blue-100  flex flex-col items-center justify-center min-h-screen  ">
      <div className="w-full md:w-2/3 bg-white p-8 shadow-md rounded-3xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>

        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/create-account"
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
