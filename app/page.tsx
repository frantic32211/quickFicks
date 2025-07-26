"use client";

import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";
import { useEffect, useState } from "react";
import VideoFeed from "./components/VideoFeed";
import { useSession } from "next-auth/react";
import Header from "./components/Header";
import LoginPage from "./login/page";

export default function Home() {
  const { data: session } = useSession();

  const [videos, setVideos] = useState<IVideo[]>([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await apiClient.getVideos();
        setVideos(data)
      } catch (error) {
        console.error("Error fetching videos ", error);
      }
    };
    if (session) {
      fetchVideos();
    }
  }, [session]);

  return (

    session ? (<main className="min-h-screen bg-base-200" >
      <Header />
      <div className="">
        <VideoFeed videos={videos} />
      </div>
    </main>) 
    : 
    (<LoginPage />)

  );
}
