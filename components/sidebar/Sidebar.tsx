import React from "react";
import Link from "next/link";
import NavLinks from "./navlinks";

function Sidebar() {
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
                      <p className="font-regular text-sm hover:bg-gray-200 p-1 focus:bg-violet-700 rounded-md flex items-center gap-1">
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
