"use client";
import React from "react";
import Link from "next/link";
import NavLinks from "./navlinks";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="h-full pr-2 pl-2">
      <ul className="mt-5">
        {NavLinks.map((link) => (
          <li key={link.label} className=" mb-2 ml-2">
            <Link href={link.href}>
              <p className="font-bold flex items-center gap-1">{link.label}</p>
            </Link>
            {link.sublinks && (
              <ul className="ml-2">
                {link.sublinks.map((sublink) => (
                  <li key={sublink.label}>
                    <Link href={sublink.href}>
                      <p
                        className={`font-regular text-sm ${
                          pathname === sublink.href
                            ? " bg-slate-300 p-1"
                            : "hover:bg-slate-200 p-1"
                        } rounded-md flex items-center gap-1`}
                      >
                        {sublink.icon}
                        {sublink.label}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
