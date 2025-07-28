import React from "react";
import { FileUp, Menu, Mic } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Upload() {
  return (
    <section className="flex items-center justify-center pt-16 cursor-pointer">
      <div className="grid w-full max-w-sm items-center place-items-center gap-1.5 text-purple-600">
        <Label
          htmlFor="audio_file"
          className="w-2/6 outline outline-1 outline-purple-600 flex justify-center items-center p-2 rounded-lg gap-2"
        >
          <FileUp size={20} />
          <span className="font-bold">upload file</span>
        </Label>
        <Input id="audio_file" type="file" className="hidden" />
      </div>
    </section>
  );
}
