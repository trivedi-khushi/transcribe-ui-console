import React from "react";
import { FileUp, Menu, Mic } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavMenu() {
  return (
    <div className="flex items-center justify-between ">
      <Menu className="text-purple-600 " size={32} />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
