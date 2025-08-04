"use client";
import Link from "next/link";
import { User, Folder, Mail, Hammer } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    {
      icon: <User size={22} />,
      href: "/",
      color: "text-teal-600",
      label: "Profile",
      tooltipColor: "bg-teal-500 text-white",
    },
    {
      icon: <Hammer size={22} />,
      href: "/Tech-stack",
      color: "text-teal-500",
      label: "Tech Stack",
      tooltipColor: "bg-teal-500 text-white",
    },
    {
      icon: <Folder size={22} />,
      href: "/Projects",
      color: "text-teal-500",
      label: "Projects",
      tooltipColor: "bg-teal-500 text-white",
    },
    {
      icon: <Mail size={22} />,
      href: "/Contact",
      color: "text-teal-400",
      label: "Contact",
      tooltipColor: "bg-teal-400 text-white",
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-7 top-1/2 -translate-y-1/2 w-16 bg-gradient-to-b from-white to-slate-100 border border-teal-200 rounded-4xl shadow-xl flex-col items-center py-7 z-50">
        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative flex items-center"
            >
              <div
                className={`text-gray-500 transition duration-300 transform hover:scale-110 ${item.color}`}
              >
                {item.icon}
              </div>
              <span
                className={`absolute left-10 top-1/2 -translate-y-1/2 px-2 py-1 rounded text-xs shadow-md whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ${item.tooltipColor}`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 bg-gradient-to-b from-white to-slate-100 border border-teal-200 rounded-4xl shadow-xl flex items-center justify-center px-10 py-5 z-50 space-x-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group relative flex items-center"
          >
            <div
              className={`text-gray-500 transition duration-300 transform hover:scale-110 ${item.color}`}
            >
              {item.icon}
            </div>
            <span
              className={`absolute top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs shadow-md whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ${item.tooltipColor}`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
