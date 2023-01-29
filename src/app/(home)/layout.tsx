"use client";
import React, { useState } from "react";
import "../globals.css";
import Footer from "./(component)/footer";
import Navbar from "./(component)/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hydrated, setHydrated] = useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
