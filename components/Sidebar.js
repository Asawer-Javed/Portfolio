"use client";
import Link from "next/link";
import { useState } from "react";
import { Home, Mail, Folder, Menu, X, User } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: <Home />, href: "#home" },
    { label: "Projects", icon: <Folder />, href: "#projects" },
    { label: "About", icon: <User />, href: "#about" },
    { label: "Contact", icon: <Mail />, href: "#contact" },
  ];

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-4 fixed top-4 left-4 z-50 bg-white rounded-md shadow-md"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-6 z-40 transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <h2 className="text-2xl font-bold mb-8">My Portfolio</h2>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
