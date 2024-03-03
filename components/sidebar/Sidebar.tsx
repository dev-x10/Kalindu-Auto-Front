import React from "react";
import NavLinks from "./navlinks";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="h-full">
      <ul className="mt-5 font-medium">
        {NavLinks.map((link) => (
          <li key={link.label} className="w-full mb-2 ml-2">
            <Link key={link.label} href={link.href}>
              <p>{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
