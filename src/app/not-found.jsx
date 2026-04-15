"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-4">
      <div className="text-center max-w-lg w-full">
        {/* Floating Emoji */}
        <motion.div initial={{ y: -10 }} animate={{ y: 10 }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-7xl mb-6">
          🧸
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-3">404</h1>

        <h2 className="text-xl font-semibold text-gray-700 mb-2">Oops! Page not found</h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">The page you are looking for vanished into the void... or maybe it never existed</p>

        {/* Button */}
        <Link href="/">
          <button className="px-6 py-3 rounded-2xl bg-[#244D3F] text-white font-medium shadow-md hover:bg-[#1b7950] transition duration-300 hover:scale-105">⬅ Back to Home</button>
        </Link>

        {/* Decorative blobs */}
        <div className="mt-10 flex justify-center gap-4 opacity-70">
          <div className="w-4 h-4 bg-pink-300 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-indigo-300 rounded-full animate-bounce delay-150"></div>
          <div className="w-4 h-4 bg-purple-300 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
}
