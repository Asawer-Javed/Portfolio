"use client";
import React from "react";

const projects = [
  {
    title: "Company Site",
    description:
      "A modern business website built for showcasing services of company.",
    videoSrc: "/videos/company-website.mp4",
  },
  {
    title: "CSS Grid Generator",
    description:
      "A developer tool that visually creates responsive CSS grid layouts.",
    videoSrc: "/videos/Grid-generator.mp4",
  },
  {
    title: "Shrinkly URL Shortener",
    description:
      "A full-stack web app for generating short, trackable URLs with custom slugs.",
    videoSrc: "/videos/Shrinkly.mp4",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "A stylish landing page for a restaurant brand, featuring menu and contact.",
    videoSrc: "/videos/Restaurant Landing Page.mp4",
  },
  {
    title: "Chrome SEO Extension",
    description:
      "A lightweight Chrome extension for analyzing on-page SEO metrics.",
    videoSrc: "/videos/Chrome ex-seo.mp4",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-start justify-center px-2 pt-23 sm:pt-25 pb-10">
      <div className="w-full max-w-5xl ml-0 md:ml-[6rem] lg:ml-[6rem] bg-teal-100 border border-teal-300 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-teal-700 mb-10">
          Featured Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-teal-200 rounded-xl p-3 shadow-md w-full max-w-sm mx-auto transition-transform duration-300 hover:scale-[1.02]"
            >
              <h2 className="text-base font-semibold text-teal-600 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm leading-snug mb-3">
                {project.description}
              </p>
              <div className="rounded-md overflow-hidden">
                <video
                  className="w-full h-36 object-cover outline-none rounded-md"
                  src={project.videoSrc}
                  controls
                  preload="metadata"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
