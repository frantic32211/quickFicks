"use client"

import { Video } from "@imagekit/next";
import Link from "next/link";
import { IVideo } from "@/models/Video";

const apiUrl = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function VideoComponent({ video }: { video: IVideo }) {
    return (
        <div className="card bg-base-100 shadow hover:shadow-lg transition-all duration-300">
            <figure className="relative px-4 pt-4">
                <Link href={apiUrl + video?.videoUrl} className="relative group w-full">
                    <div
                        className="rounded-xl overflow-hidden relative w-full"
                        style={{ aspectRatio: "9/16" }}
                    >
                        <Video
                            src={video?.videoUrl}
                            transformation={[{ height: 1920, width: 1080 }]}
                            controls={video.controls}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </Link>
            </figure>

            <div className="card-body p-4">
                <Link
                    href={apiUrl + video?.videoUrl}
                    className="hover:opacity-80 transition-opacity"
                >
                    <h2 className="card-title text-lg">{video.title}</h2>
                </Link>

                <p className="text-sm text-base-content/70 line-clamp-2">
                    {video.description}
                </p>
            </div>
        </div>

    );
}
