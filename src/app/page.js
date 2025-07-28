import { headers } from "next/headers";
import { isMobile } from "@/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { FileUp, Menu, Mic } from "lucide-react";
import VoiceInput from "@/components/voiceInput";
import AudioRecorder from "@/components/AudioRecorder";
import Upload from "@/components/ui/Upload";
import MicInput from "@/components/MicInput";
import NavMenu from "@/components/NavMenu";
import MicInputActive from "@/components/ui/MicInputActive";

const userAgent = (await headers().get("user-agent")) || "";
const mobileCheck = isMobile(userAgent);

export default function Home() {
  //flags
  const isRecording = true;

  // determine if user is on mobile or desktop
  if (mobileCheck) {
    console.log("in mobile mode");
  } else {
    console.log("not mobile mode");
    return <div>Please access via mobile phone</div>;
  }

  return (
    <main className="p-2">
      <NavMenu />
      <h1 className="text-2xl font-extrabold capitalize py-4">transcribe</h1>
      <div>
        <Input type="text" placeholder="search recordings" />
      </div>

      <section className="py-4 flex items-baseline justify-between">
        <h2 className="text-xl font-bold capitalize">recent transcriptions</h2>
        <Badge variant="outline">see all</Badge>
      </section>
      {!isRecording && <MicInput />}

      {!isRecording && <Upload />}
      <section className="py-4">{isRecording && <AudioRecorder />}</section>
    </main>
  );
}
