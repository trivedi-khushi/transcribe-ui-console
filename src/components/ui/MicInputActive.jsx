import React from "react";
import { Mic } from "lucide-react";

export default function MicInputActive() {
  return (
    <section className="flex items-center justify-center pt-24 cursor-pointer">
      <div className="w-32 h-32  rounded-full outline outline-purple-600 flex items-center justify-center">
        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
          <Mic className="text-white" />
        </div>
      </div>
    </section>
  );
}
