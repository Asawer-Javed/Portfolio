"use client";
import Link from "next/link";

export default function HomeBlock() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 px-4 font-sans">
      <div
        className="
          bg-teal-100
          text-teal-700
          p-10
          rounded-3xl
          shadow-2xl
          flex flex-col items-center space-y-8
          w-full max-w-4xl mx-auto
        "
      >
        <h1 className="text-5xl font-extrabold text-center text-teal-600 tracking-tight">
          Asawer Javed
        </h1>

        <p className="text-xl text-center text-teal-700 font-medium text-slate-700">
          Full Stack Developer · Next.js Enthusiast · UI Perfectionist
        </p>

        <p className="text-base text-center max-w-xl text-slate-600 leading-relaxed">
          I design and build modern, responsive, and performance-focused web
          apps using the MERN stack. From sleek UIs to scalable backends, I
          craft clean code that delivers real results.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/Projects"
            className="
              bg-teal-600 text-white px-6 py-2 rounded-xl shadow hover:bg-teal-700 transition
            "
          >
            View Projects
          </Link>
          <Link
            href="/Contact"
            className="
              border border-teal-600 text-teal-600 px-6 py-2 rounded-xl hover:bg-teal-600 hover:text-white transition
            "
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
