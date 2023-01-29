"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Pagination from "./pagination";

export default function AllArticle({
  articles,
  limit = 10,
}: {
  articles: any[];
  limit?: number;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = Math.ceil(articles.length / limit) - 1;
  const start = currentPage * limit;
  const end = start + limit;

  return (
    <div className="AllArticle max-w-6xl mx-auto">
      <h1 className="px-2 py-10 font-bold text-xl">All Articles</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  place-content-center mx-auto">
        {articles &&
          articles.length > 0 &&
          articles.slice(start, end).map((data, index) => {
            const article = {
              ...data,
              img: "https://source.unsplash.com/random?orientation=landscape&&nature",
              author: {
                name: "Lorem Ipsum",
                img: "https://source.unsplash.com/random?face",
              },
              createdAt: "2021-08-01",
              tags: ["Lorem", "Ipsum", "Dolor", "Sit", "Amen"],
              slug: `article-slug`,
            };
            return <ArticleCard key={index} {...article} />;
          })}
      </div>
      <hr className="mt-10 mb-6" />

      <Pagination
        totalRecords={articles.length}
        pageNeighbors={1}
        pageLimit={limit}
        onPageChanged={(data) => {
          setCurrentPage(Math.max(0, data.currentPage - 1));
        }}
      />
    </div>
  );
}

export function ArticleCard({
  id,
  img,
  title,
  body,
  url,
  author,
  createdAt,
  tags,
  slug,
}: {
  id: string;
  img: string;
  title: string;
  body: string;
  url?: string;
  author?: any;
  createdAt?: string;
  tags?: any[];
  slug: string;
}) {
  return (
    <Link href={`/${slug}-${id}`}>
      <div className="ArticleCard p-2 rounded max-w-lg">
        <div className="flex flex-col items-center gap-4 object-cover">
          <Image
            src={img}
            alt={""}
            width="400"
            height="150"
            className="shadow rounded-lg  h-40"
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
            <h1 className=" font-semibold w-full maxLine2">{title}</h1>
            <p className="text-gray-500 text-sm w-full maxLine3">{body}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
