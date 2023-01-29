import { Button } from "@/components/ui/button";
import { Github, Linkedin, Rss, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  function SocialButton({ children, href }: { children: any; href: string }) {
    return (
      <Button variant="ghost" size={"sm"} className="rounded-full">
        <Link href={href}>{children}</Link>
      </Button>
    );
  }
  return (
    <div className="Footer flex flex-col mt-20 mb-4 ">
      <hr className="mt-10 mb-4  bg-gray-400 w-full" />
      <div className="flex items-center place-content-between gap-4 text-gray-500 text-sm max-w-6xl mx-auto w-full px-4 xl:px-0">
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
