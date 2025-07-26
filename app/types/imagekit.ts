export interface ImageKitUploadResponse {
    fileId: string;
    filePath: string;
    name: string;
    url: string;
    thumbnailUrl?: string;
    fileType: "image" | "video" | "non-media";
    size: number;
    height?: number;
    width?: number;
    isPrivateFile?: boolean;
    [key: string]: any;
}
