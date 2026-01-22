import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      navigate("/home"); 
    }  catch (err) {
        console.error("login error:", err); 
        setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full flex items-center justify-center px-8">
        <div className="w-full max-w-md ">

          <p className="text-[#4D4D4D] mb-8 text-center bold-400 text-lg">
            Log in to your account
          </p>

          {error && (
            <div className="mb-6 rounded-lg bg-red-100 border border-red-300 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* EMAIL */}
            <div className="flex flex-col items-start gap-[12px]">
              <label className="text-sm font-medium text-[#4D4D4D]">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-14 px-6 rounded-xl bg-[#F9F9F9] text-[#4D4D4D] placeholder-[#9D9A9A] focus:outline-none focus:ring-2 focus:ring-[#0057B8]"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col items-start gap-[12px]">
              <label className="text-sm font-medium text-[#4D4D4D]">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full h-14 px-6 rounded-xl bg-[#F9F9F9] text-[#4D4D4D] placeholder-[#9D9A9A] focus:outline-none focus:ring-2 focus:ring-[#0057B8]"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="mt-1"
              />
              <p className="text-sm text-[#4D4D4D]">
                Remember me
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-xl bg-[#0057B8] text-white font-medium hover:opacity-90 transition disabled:opacity-50 mt-4"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          {/* Sign up */}
          <p className="text-center text-sm text-[#4D4D4D] mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-[#D4AF37] cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>

          <p className="text-center text-sm text-[#4D4D4D] mt-10">
            We don't store your documents
          </p>
        </div>
      </div>
    </div>
  );
}
