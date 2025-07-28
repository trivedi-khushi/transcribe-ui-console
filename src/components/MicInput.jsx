import React from "react";
import { Mic } from "lucide-react";

export default function MicInput() {
  return (
    <section className="flex items-center justify-center pt-24 cursor-pointer">
      <div className="p-3 ring-1 ring-violet-600 rounded-full">
        <div className="p-3  ring-2 ring-violet-600 rounded-full">
          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
            <Mic className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
