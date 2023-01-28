import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  // default, can also use "swap" to ensure custom font always shows
  display: "optional",
  weight: "300",
});

export default function About() {
  return (
    <div className="">
      <HeroComponent />
      <ArticleBody />
      <RelatedPosts />
    </div>
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
  );
}

function ArticleBody() {
  return (
    <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto pt-8 md:px-0 px-4">
      <Image
        src={
          "https://images.unsplash.com/photo-1469536526925-9b5547cd5d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b3JpZW50YXRpb24sbmF0dXJlfHx8fHx8MTY3NDk0Njg3MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        }
        alt={""}
        width="820"
        height="250"
        className="shadow rounded w-full "
      />
      <h1 className="font-bold w-full text-xl">
        Lorem ipsum began as scrambled, nonsensical Latin derived from
        Cicero&apos;s 1st-century BC text De Finibus Bonorum et Malorum.
      </h1>
      <p className={inter.className}>
        What I find remarkable is that this text has been the industry&apos;s
        standard dummy text ever since some printer in the 1500s took a galley
        of type and scrambled it to make a type specimen book; it has survived
        not only four centuries of letter-by-letter resetting but even the leap
        into electronic typesetting, essentially unchanged except for an
        occasional &apos;ing&apos; or &apos;y&apos; thrown in. It&apos;s ironic
        that when the then-understood Latin was scrambled, it became as
        incomprehensible as Greek; the phrase &apos;it&apos;s Greek to me&apos;
        and &apos;greeking&apos; have common semantic roots!” (The editors
        published his letter in a correction headlined “Lorem Oopsum
      </p>
      <h1 className="font-semibold w-full text-lg">
        Creation timelines for the standard lorem ipsum passage vary, with some
        citing the 15th century and others the 20th.
      </h1>
      <p className={inter.className}>
        So how did the classical Latin become so incoherent? According to
        McClintock, a 15th century typesetter likely scrambled part of
        Cicero&apos;s De Finibus in order to provide placeholder text to mockup
        various fonts for a type specimen book
      </p>
      <p className={inter.className}>
        It&apos;s difficult to find examples of lorem ipsum in use before
        Letraset made it popular as a dummy text in the 1960s, although
        McClintock says he remembers coming across the lorem ipsum passage in a
        book of old metal type samples. So far he hasn&apos;t relocated where he
        once saw the passage, but the popularity of Cicero in the 15th century
        supports the theory that the filler text has been used for centuries.
      </p>
      <p className={inter.className}>
        And anyways, as Cecil Adams reasoned, “[Do you really] think graphic
        arts supply houses were hiring classics scholars in the 1960s?” Perhaps.
        But it seems reasonable to imagine that there was a version in use far
        before the age of Letraset. McClintock wrote to Before & After to
        explain his discovery; “What I find remarkable is that this text has
        been the industry&apos;s standard dummy text ever since some printer in
        the 1500s took a galley of type and scrambled it to make a type specimen
        book; it has survived not only four centuries of letter-by-letter
        resetting but even the leap into electronic typesetting, essentially
        unchanged except for an occasional &apos;ing&apos; or &apos;y&apos;
        thrown in. It&apos;s ironic that when the then-understood Latin was
        scrambled, it became as incomprehensible as Greek; the phrase
        &apos;it&apos;s Greek to me&apos; and &apos;greeking&apos; have common
        semantic roots!” (The editors published his letter in a correction
        headlined “Lorem Oopsum”).
      </p>
    </div>
  );
}

// Related Posts
function RelatedPosts() {
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
    <div className="pt-20">
      <hr />
      <div className="flex flex-col gap-6 max-w-4xl mx-auto py-10">
        <h1 className="text-xl font-semibold">Related Posts</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  place-content-center mx-auto">
          {[...Array(3)].map((_, index) => (
            <ArticleCard
              key={index}
              {...article}
              slug={`article-slug-${index + 1}`}
            />
          ))}
        </div>
      </div>
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
