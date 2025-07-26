"use client"

import { IVideo } from "@/models/Video";
import VideoComponent from "./VideoComponent";

interface VideoFeedProps {
  videos: IVideo[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos?.map((video) => (
        <VideoComponent key={video._id?.toString()} video={video} />
      ))}

      {videos?.length === 0 && (
        <div className="card bg-base-100 shadow hover:shadow-lg transition-all duration-300">
          <figure className="relative px-4 pt-4">
            <div
              className="rounded-xl overflow-hidden relative w-full"
              style={{ aspectRatio: "9/16" }}>
            </div>
          </figure>

          <div className="card-body p-4">
            <h2 className="card-title text-lg"></h2>
            <p className="text-sm text-base-content/70 line-clamp-2">
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
