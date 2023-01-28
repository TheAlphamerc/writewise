import { Button } from "@/components/ui/button";
import { Github, Linkedin, Rss, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-mono">
      <HeroComponent />
      <AllArticle />
      <Pagination total={20} currentPage={0} />
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

function AllArticle() {
  const article = {
    img: "https://source.unsplash.com/random?orientation=landscape&&nature",
    title: " Lorem ipsum dolor sit amen, consectetur advising elite,",
    subtitle:
      "Sed do elusion tempore incident ut laborer et dolores magna aliquant.",
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
    <div className="AllArticle max-w-6xl mx-auto">
      <h1 className="px-2 py-10 font-bold text-xl">All Articles</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  place-content-center mx-auto">
        {[...Array(8)].map((_, index) => (
          <ArticleCard
            key={index}
            {...article}
            slug={`article-slug-${index + 1}`}
          />
        ))}
      </div>
      <hr className="mt-10 mb-4" />
    </div>
  );
}

function ArticleCard({
  img,
  title,
  subtitle,
  url,
  author,
  createdAt,
  tags,
  slug,
}: {
  img: string;
  title: string;
  subtitle: string;
  url?: string;
  author?: any;
  createdAt?: string;
  tags?: any[];
  slug: string;
}) {
  return (
    <Link href={`/${slug}`}>
      <div className="ArticleCard p-2 rounded max-w-lg">
        <div className="flex flex-col items-center gap-4 object-cover">
          <Image
            src={img}
            alt={""}
            width="400"
            height="150"
            className="shadow rounded-lg  "
          />
          <div className="flex w-full gap-2 items-center">
            <Image
              src={author.img}
              alt={""}
              height={20}
              width={20}
              className="rounded-full h-5 w-5"
            />
            <p className="text-slate-700 font-medium text-sm">{author.name}</p>

            <p className="text-gray-500 text-sm">&nbsp;/&nbsp;{createdAt}</p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className=" font-semibold w-full">{title}</h1>
            <p className="text-gray-500 text-sm w-full">{subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Pagination({
  total,
  currentPage,
  per = 5,
}: {
  total: number;
  currentPage: number;
  per?: number;
}) {
  return (
    <div className="Pagination flex items-center justify-center gap-4">
      <Button variant="outline" disabled={currentPage === 0}>
        Prev
      </Button>
      {/* Display start few buttons and end few buttons */}
      {[...Array(total)]
        .slice(0, total - per > 2 ? per : total)
        .map((_, index) => (
          <Button
            key={index}
            variant={index === currentPage ? "default" : "ghost"}
            className="w-8 h-8"
          >
            {index + 1}
          </Button>
        ))}
      <div>
        {
          // Display ellipsis if total pages are more than per
          total - per > 2 && <span>...</span>
          // Display 2 or 3 last button
        }
        {total - per > 2 && <Button variant="ghost">{total}</Button>}
      </div>

      <Button variant="outline" disabled={currentPage === total - 1}>
        Next
      </Button>
    </div>
  );
}
