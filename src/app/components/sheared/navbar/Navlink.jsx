"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ href, text, icon, onClick }) => {
  const pathName = usePathname();
  return (
    <Link href={href} className={`btn flex items-center gap-2 mr-2 border-none bg-none hover:bg-[#244D3F] hover:text-white ${pathName === href ? "bg-[#244D3F] text-white" : "" }`} onClick={onClick}>
      {icon && <span className="text-lg">{icon}</span>}
      {text}
    </Link>
  );
};

export default Navlink;
