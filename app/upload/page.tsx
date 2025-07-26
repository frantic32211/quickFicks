"use client";

import VideoUploadForm from "../components/VideoUploadForm";

export default function VideoUploadPage() {
    return (
        <main className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
            <section className="w-full max-w-3xl bg-base-100 shadow-2xl rounded-xl p-10">
                <h1 className="text-3xl font-extrabold text-center text-base-content mb-8">
                    Upload New Reel
                </h1>
                <VideoUploadForm />
            </section>
        </main>
    );
}
