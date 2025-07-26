"use client"

import { upload } from "@imagekit/next";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { ImageKitUploadResponse } from "../types/imagekit";


interface FileUploadProps {
    onSuccess: (res: ImageKitUploadResponse) => void
    onProgress?: (progress: number) => void
    fileType?: "image" | "video"
}

const FileUpload = ({ onSuccess, onProgress, fileType }: FileUploadProps) => {

    const [uploading, setUploading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [fileName, setFileName] = useState<string>("No file chosen");

    const validateFile = (file: File) => {
        if (fileType === "video") {
            if (!file.type.startsWith("video/")) {
                setError("Please upload a valid video file")
            }

            if (file.size > 100 * 1024 * 1024) {
                setError("Video must be less than 100 MB")
            }
        } else if (fileType === "image") {
            const validTypes = ["image/jpeg", "image/png", "image/webp"]

            if (!validTypes.includes(file.type)) {
                setError("Please upload a valid image file (jpeg, png, webp)")
            }
            if (file.size > (5 * 1024 * 1024)) {
                setError("Image must be less than 5 MB")
            }

        }

        return true

    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0]

        if (!file || !validateFile(file)) return

        setFileName(file.name);
        setUploading(true)
        setError(null)

        try {
            const authRes = await fetch("/api/imagekit-auth")
            const { authenticationParameters } = await authRes.json()

            const res = await upload({
                file,
                fileName: file.name,
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
                signature: authenticationParameters?.signature,
                expire: authenticationParameters?.expire,
                token: authenticationParameters?.token,
                onProgress: (event) => {
                    if (event.lengthComputable && onProgress) {
                        const percent = (event.loaded / event.total) * 100
                        onProgress(Math.round(percent))
                    }
                },
            });

            onSuccess(res as ImageKitUploadResponse);

        } catch (error) {
            console.error("Upload failed", error)
        } finally {
            setUploading(false)
        }

    }

    return (


        <div className="w-full">
            <label className="w-full flex items-center justify-between bg-base-300 text-base-content border border-base-100 rounded-lg px-4 py-2 cursor-pointer hover:bg-base-200 transition">
                <span className="font-semibold">CHOOSE FILE</span>
                <span className="truncate">{fileName}</span>
                <input
                    type="file"
                    accept={fileType === "video" ? "video/*" : "image/*"}
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>

            {uploading && (
                <div className="flex items-center gap-2 text-sm text-info mt-2">
                    <Loader2 className="animate-spin w-4 h-4" />
                    <span>Uploading...</span>
                </div>
            )}

            {error && (
                <div className="text-error text-sm mt-1">{error}</div>
            )}
        </div>
    );
};

export default FileUpload;