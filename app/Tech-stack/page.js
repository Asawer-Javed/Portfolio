"use client";
import Image from "next/image";

export default function TechStackBox() {
  const logos = [
    {
      name: "HTML",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      customSize: 55,
    },
    {
      name: "CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      customSize: 40,
    },
    {
      name: "Tailwind CSS",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "JavaScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Next.js",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 px-4 font-sans">
      <div className="bg-teal-100 p-10 rounded-3xl shadow-2xl flex flex-col items-center space-y-8 w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-600 text-center tracking-tight">
          My Tech Stack
        </h1>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow-md hover:scale-110 transition-transform duration-300"
              title={logo.name}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.customSize || 48}
                height={logo.customSize || 48}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
