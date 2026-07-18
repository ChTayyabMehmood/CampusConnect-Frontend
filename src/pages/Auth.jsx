import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import Logo from "../components/common/Logo";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-lg bg-white  border-gray-200 p-10">
        <div className="text-center">
          <Logo />

          <h1 className="text-4xl font-bold text-gray-900 mt-6">
            Welcome to <br /> CampusConnect
          </h1>

          <p className="text-gray-500 mt-4 text-base">
            Discover opportunities your campus misses.
          </p>
        </div>

        {/* Sign Up / Sign In Toggle */}
        <div className="flex mt-8 bg-gray-100 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setIsSignUp(true)}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
              isSignUp
                ? "bg-black text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={() => setIsSignUp(false)}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
              !isSignUp
                ? "bg-black text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sign In
          </button>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">
          {isSignUp && (
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="abc@xyz.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {isSignUp && (
            <div>
              <label
                htmlFor="university"
                className="block mb-2 text-sm font-medium text-gray-800"
              >
                University / College
              </label>

              <input
                id="university"
                name="university"
                type="text"
                placeholder="eg. University of California, Berkeley"
                value={formData.university}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
              >
                {showPassword ? <LuEye size={18} /> : <LuEyeOff size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label
              htmlFor="rememberMe"
              className="flex items-center gap-2 text-gray-600 cursor-pointer"
            >
              <input
                id="rememberMe"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
              />
              Remember Me
            </label>

            {!isSignUp && (
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                Forgot Password?
              </a>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-200 shadow-md hover:shadow-lg"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
