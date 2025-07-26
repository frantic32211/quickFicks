"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useNotification } from "../components/Notification";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showNotification("Passwords do not match", "error");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      showNotification("Registration successful", "success");
      router.push("/login");
    } catch (error: any) {
      showNotification(error.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-50">
      <div className="card w-full size-150 max-w-xl shadow-lg bg-base-300  rounded-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl mt-8 mb-12 mx-auto">Register to QuickFicks</h2>

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
              className="input input-bordered w-full py-6 my-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered w-full py-6 mt-4 mb-2"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button className="btn btn-primary w-full py-6 my-8 rounded-lg" type="submit">
              <span className="text-xl"> Register</span>
            </button>
          </form>

          <p className="text-lg mt-2 text-center">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="link link-primary ml-2"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
