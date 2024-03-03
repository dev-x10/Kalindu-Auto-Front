"use-client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <span className="font-bold ml-4 text-blue-50">KALINDU AUTO</span>
      <Avatar className="mr-10">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
}

export default Navbar;
