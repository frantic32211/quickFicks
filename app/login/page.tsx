"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useNotification } from "../components/Notification";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      showNotification("Invalid credentials", "error");
    } else {
      showNotification("Logged in successfully", "success");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-50">
      <div className="card w-full size-130  max-w-xl shadow-lg bg-base-300 rounded-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl mt-8 mb-12 mx-auto">Login to QuickFicks</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter email"
              className="input input-bordered w-full py-6 my-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full py-6 my-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="btn btn-primary w-full py-6 my-8 rounded-lg" type="submit">
              <span className="text-xl">  Login </span>
            </button>
          </form>

          <p className="text-lg mt-4 text-center">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/register")}
              className="link link-primary ml-2"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
