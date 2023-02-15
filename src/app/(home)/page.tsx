import { Button } from "@/components/ui/button";
import { Github, Linkedin, Rss, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AllArticle from "./(component)/article_lists";
import Pagination from "./(component)/pagination";

async function getArticles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function Home() {
  const articles = (await getArticles().catch((err) => {
    // console.log("Error s", err);
    return [];
  })) as Array<any>;
  return (
    <main className="font-mono">
      <HeroComponent />
      <AllArticle articles={articles} />
    </main>
  );
}

function HeroComponent() {
  return (
    <div className="HeroComponent bg-gray-50 py-20 flex flex-col items-center gap-12 text-center">
      <h1>
        <span className="text-5xl font-bold">Hi, Lorem Ipsum!!</span>
      </h1>
      <div className="flex flex-col items-center gap-4">
        <p className="">
          Lorem ipsum dolor sit amen, consectetur advising elite,
        </p>
        <p className="">
          Sed do elusion tempore incident ut laborer et dolores magna aliquant.
        </p>
        <p className="">As Cicero would put it, “Um, not so fast.”</p>
      </div>
    </div>
  );
}
