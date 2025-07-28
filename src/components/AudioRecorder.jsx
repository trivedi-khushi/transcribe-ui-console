"use client";
import { useState } from "react";
import { ReactMic } from "react-mic";
import { CircleStop, CirclePause } from "lucide-react";
import MicInputActive from "./ui/MicInputActive";

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const uploadAudio = async (base64Data) => {
    try {
      const response = await fetch("http://localhost:3001/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ audio: base64Data }),
      });
      const result = await response.json();
      console.log("Upload Result:", result);
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
  };

  const onData = (recordedBlob) => {
    console.log("Chunk of real-time data:", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    setAudioBlob(recordedBlob);
    console.log("Recorded Blob:", recordedBlob);

    //process audio to backend
    const reader = new FileReader();
    reader.readAsDataURL(recordedBlob.blob); // Convert Blob to Base64
    reader.onloadend = () => {
      const base64Data = reader.result; // Base64 string
      console.log("Base64 Audio Data:", base64Data);
      // Send to backend or process further
      uploadAudio(base64Data);
    };
  };

  return (
    <div>
      <ReactMic
        record={isRecording}
        onData={onData}
        onStop={onStop}
        mimeType="audio/wav"
        strokeColor="white"
        backgroundColor="purple"
        className="w-full hidden"
        noiseSuppression={true}
        echoCancellation={true}
      />
      <MicInputActive />
      <button onClick={startRecording} disabled={isRecording}>
        <CirclePause />
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        <CircleStop />
      </button>
      {audioBlob && <audio controls src={audioBlob.blobURL} />}
    </div>
  );
};

export default AudioRecorder;
