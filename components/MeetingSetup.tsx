"use client";

import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({setIsSetupComplete}: {setIsSetupComplete: (value: boolean)=>void}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call)
    throw new Error("useCall must be called within a StreemCall component");

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-3 text-white ">
      <h1 className="text-2xl font-bold ">Meeting Setup</h1>
      <VideoPreview />
      <div className="flex flex-col items-center justify-center gap-3 ">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with Mic and Camera Off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="bg-green-500 rounded-md px-4 py-2.5 "
        onClick={() => {
          call.join();
          setIsSetupComplete(true)
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
