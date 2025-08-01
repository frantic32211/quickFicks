"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Home, User } from "lucide-react";
import { useNotification } from "./Notification";

export default function Header() {
    const { data: session } = useSession();
    const { showNotification } = useNotification();

    const handleSignOut = async () => {
        try {
            await signOut();
            showNotification("Signed out successfully", "success");
        } catch {
            showNotification("Failed to sign out", "error");
        }
    };

    return (
        <div className="sticky top-0 z-40 bg-base-300 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold hover:opacity-80"
                    onClick={() => showNotification("Welcome to QuickFicks", "info")}
                >
                    <Home className="w-5 h-5" />
                    QuickFicks
                </Link>

                <div className="flex items-center gap-2">
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <User className="w-5 h-5" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] shadow-lg bg-base-100 rounded-box w-64 mt-4 py-2"
                        >
                            {session ? (
                                <>
                                    <li className="px-4 py-1">
                                        <span className="text-sm opacity-70">
                                            {session.user?.email?.split("@")[0]}
                                        </span>
                                    </li>
                                    <div className="divider my-1"></div>
                                    <li>
                                        <Link
                                            href="/upload"
                                            className="px-4 py-2 hover:bg-base-200 block w-full"
                                            onClick={() =>
                                                showNotification("Welcome to Admin Dashboard", "info")
                                            }
                                        >
                                            Video Upload
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className="px-4 py-2 text-error hover:bg-base-200 w-full text-left"
                                        >
                                            Sign Out
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <Link
                                        href="/login"
                                        className="px-4 py-2 hover:bg-base-200 block w-full"
                                        onClick={() =>
                                            showNotification("Please sign in to continue", "info")
                                        }
                                    >
                                        Login
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
