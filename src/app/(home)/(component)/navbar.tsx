import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="top-0 sticky z-10">
      <div className="w-full inset-0  h-14 top-0 from-amber-300  via-purple-400 to-red-400 bg-gradient-to-l blur-lg"></div>
      <nav className="absolute inset-0 top-0 flex items-center gap-2  h-16 bg-white">
        <div className="flex items-center gap-4 place-content-between max-w-5xl w-full mx-auto  ">
          <div className="flex items-center gap-4  max-w-5xl w-full mx-auto  ">
            <Button variant="ghost">
              <Link href={"#"}>Blog</Link>
            </Button>
          </div>
          <Button variant="ghost">
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
