"use client";
import { useState } from "react";

const VoiceInput = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const startListening = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscript(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    setIsListening(true);
  };

  return (
    <div>
      <button onClick={startListening} disabled={isListening}>
        {isListening ? "Listening..." : "Start Listening"}
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default VoiceInput;
