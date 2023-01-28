"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Rss, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import "../globals.css";

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

function Navbar() {
  return (
    <div className="top-0 sticky">
      <div className="w-full inset-0  h-14 top-0 from-amber-300  via-purple-400 to-red-400 bg-gradient-to-l blur-lg"></div>
      <nav className="absolute inset-0 top-0 flex items-center gap-2  h-16 bg-white">
        <div className="flex items-center gap-4 place-content-between max-w-5xl w-full mx-auto  ">
          <div className="flex items-center gap-4  max-w-5xl w-full mx-auto  ">
            <Button variant="ghost">
              <Link href={"#"}>Blog</Link>
            </Button>
          </div>
          <Button variant="ghost">
            <Link href={"#"}>Signup</Link>
          </Button>
          <Button variant="ghost">
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}

function Footer() {
  function SocialButton({ children, href }: { children: any; href: string }) {
    return (
      <Button variant="ghost" size={"sm"} className="rounded-full">
        <Link href={href}>{children}</Link>
      </Button>
    );
  }
  return (
    <div className="Footer flex flex-col mt-20 mb-4 max-w-6xl mx-auto">
      <hr className="mt-10 mb-4  bg-gray-400 w-full" />
      <div className="flex items-center place-content-between gap-4 text-gray-500 text-sm">
        <p className="">© Copyright 2023</p>
        <div className="flex items-center  gap-4">
          <SocialButton href="#">
            <Github />
          </SocialButton>
          <SocialButton href="#">
            <Twitter />
          </SocialButton>
          <SocialButton href="#">
            <Linkedin />
          </SocialButton>
          <SocialButton href="#">
            <Rss />
          </SocialButton>
        </div>
      </div>
    </div>
  );
}
