import { cache } from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { ArticleCard } from "../(component)/article_lists";
import { NotionAPI } from "notion-client";
import { NotionRenderer } from "react-notion-x";
import NotionPage from "../(component)/notion-page";
import { useRouter } from "next/navigation";

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";
import StartDotPattern from "@/components/pattern/start_dot_pattern";
import { getNotionPage } from "../utils/getNotionPage";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
  weight: "300",
});

export default async function Article({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const recordMap = await getNotionPage(slug);
  return (
    <div className="">
      <HeroComponent />
      <ArticleBody recordMap={recordMap} rootPageId={slug} />
      <RelatedPosts />
    </div>
  );
}

function HeroComponent() {
  return (
    <StartDotPattern
      Children={
        <div className="HeroComponent bg-gray-50 bg-opacity-30 py-20 flex flex-col items-center gap-12 text-center">
          <h1>
            <span className="text-5xl font-bold">Hi, Lorem Ipsum!!</span>
          </h1>
          <div className="flex flex-col items-center gap-4">
            <p className="">
              Lorem ipsum dolor sit amen, consectetur advising elite,
            </p>
            <p className="">
              Sed do elusion tempore incident ut laborer et dolores magna
              aliquant.
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex w-full gap-2 items-center">
              <Image
                src={"https://source.unsplash.com/random?face"}
                alt={""}
                height={20}
                width={20}
                className="rounded-full h-5 w-5"
              />
              <span className="text-slate-700 font-medium text-sm">
                Lorem Ipsum
              </span>
              <span className="text-gray-500 text-sm">&nbsp;• &nbsp;</span>
              <span className="text-gray-500 text-sm">2021-08-01</span>
            </div>
          </div>
        </div>
      }
    />
  );
}

function ArticleBody({ recordMap, rootPageId }: any) {
  if (!recordMap) {
    return (
      <div className="text-center font-semibold text-lg py-20">Not Found</div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto pt-8 md:px-0 px-4">
      <NotionPage recordMap={recordMap} rootPageId={rootPageId} />
    </div>
  );
}

// Related Posts
function RelatedPosts() {
  const article = {
    img: "https://source.unsplash.com/random?orientation=landscape&&nature",
    title: " Lorem ipsum dolor sit amen, consectetur advising elite,",
    body: "Sed do elusion tempore incident ut laborer et dolores magna aliquant.",
    url: "https://source.unsplash.com/random?orientation=landscape",
    author: {
      name: "Lorem Ipsum",
      img: "https://source.unsplash.com/random?face",
    },
    createdAt: "2021-08-01",
    tags: ["Lorem", "Ipsum", "Dolor", "Sit", "Amen"],
    slug: "article-slug",
  };
  return (
    <div className="pt-20">
      <hr />
      <div className="flex flex-col gap-6 max-w-4xl mx-auto py-10">
        <h1 className="text-xl font-semibold">Related Posts</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  place-content-center mx-auto">
          {[...Array(3)].map((_, index) => (
            <ArticleCard
              id={`${index}`}
              key={index}
              {...article}
              slug={`slug-article-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
