"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill out all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const data = {
      access_key: "9428b6fd-3c66-46be-8d4c-e4a358e3a7ad",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Failed to send message.");
      console.error("Web3Forms Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 font-sans">
        <div className="w-full max-w-xl bg-teal-100 p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label className="block mb-1 text-slate-700 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300 bg-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-slate-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300 bg-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-slate-700 font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-teal-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300 bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={2500} theme="light" />
    </>
  );
}
