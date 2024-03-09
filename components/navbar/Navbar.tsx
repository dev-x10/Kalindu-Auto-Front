"use-client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <span className="font-bold ml-4 text-blue-50">KALINDU AUTO</span>
      <div className="flex gap-5 items-center">
        <Button size={"sm"} variant={"secondary"} className="h-8 rounded-sm">
          Login
        </Button>
        <Avatar className="mr-5">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}

export default Navbar;
