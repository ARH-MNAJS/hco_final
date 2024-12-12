"use client";

import { ArrowUpRight } from "lucide-react";

export default function EnrollButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    const element = document.getElementById("enroll"); // Target the element with ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };

  return (
    <a
      className="flex items-center w-max text-black rounded border-2 border-black bg-[#feea63] px-8 py-2 text-lg shadow-[4px_4px_0px_#000] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
      href="#enroll"
      onClick={handleClick}
    >
      Enroll Now
      <ArrowUpRight className="ml-2 w-5 h-5 text-black" />
    </a>
  );
}
