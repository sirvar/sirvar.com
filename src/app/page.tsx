import BlogPost from "@/app/_components/blog";
import Experience from "@/app/_components/experience";
import Icon from "@/app/_components/icon";
import { getPosts } from "@/db/blog";
import { get } from "@vercel/edge-config";
import Image from "next/image";
import { Github, Linkedin, Mail, MoveRight, Twitter } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();
  const locations: string[] = (await get(`countriesVisited`)) || [];

  return (
    <main className="md:p-24 p-8">
      <h1 className="text-5xl text-zinc-800 text-center	font-medium my-16 md:my-24">
        Hello.
      </h1>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center border border-zinc-800 rounded-lg p-2 sm:p-4 mb-4">
          <div className="flex gap-2 sm:gap-4 items-center">
            <Image
              className="rounded-full h-12 sm:h-16 w-12 sm:w-16 mx-auto"
              src="/rikin.jpeg"
              width={96}
              height={96}
              alt="Rikin Katyal"
            />
            <div>
              <p className="text-sm sm:text-md">Rikin Katyal</p>
              <p className="text-xs text-zinc-400">Software Engineer</p>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Icon
              title="Twitter/X"
              href="https://twitter.com/sirvar_"
              Icon={Twitter}
            />
            <Icon
              title="GitHub"
              href="https://github.com/sirvar"
              Icon={Github}
            />
            <Icon
              title="LinkedIn"
              href="https://linkedin.com/in/sirvar"
              Icon={Linkedin}
            />
            <Icon title="E-mail" href="mailto:rikin@sirvar.com" Icon={Mail} />
          </div>
        </div>
        <h3 className="text-sm">About</h3>
        <p className="font-light text-sm text-zinc-400">
          Hello, I&apos;m Rikin, a seasoned{" "}
          <span className="text-white">Full Stack Engineer</span> specializing
          in web3 and fintech. I thrive in rapidly evolving settings,
          particularly in building and scaling startups to new heights of
          success.
        </p>
        <p className="font-light text-sm text-zinc-400">
          Born & raised in Canada 🇨🇦, I&apos;m currently based in{" "}
          <span className="text-white">Lisbon, Portugal 🇵🇹</span>. As an avid
          traveller, I&apos;ve explored{" "}
          <span className="text-white">{locations.length} countries</span> and
          counting. I&apos;m also a huge fan of the outdoors, surfing, and
          reading.
        </p>

        <h3 className="text-sm">Experience</h3>
        {/* <Experience
          startYear={2023}
          endYear="Now"
          title="Co-founder & CTO"
          company="Noovid"
          link="https://noovid.com"
          description="Building the future of user generated content for e-commerce brands to connect with top creators"
        /> */}
        <Experience
          startYear={2022}
          endYear={2023}
          title="Founding Software Engineer"
          company="Utopia Labs"
          link="https://utopialabs.com"
          description="Worked on building advanced crypto accounting & payment solutions
          for blockchain transactions"
        />
        <Experience
          startYear={2021}
          endYear={2022}
          title="Senior Software Engineer"
          company="Cover"
          link="https://cover.com"
          description="Built the website & dashboard for Cover's insurance products and quoting engine"
        />
        <Experience
          startYear={2020}
          endYear={2021}
          title="Software Engineer"
          company="Makeship"
          link="https://www.makeship.com/"
          description="Crafted a custom e-commerce platform for creators to launch crowdfunding campaigns"
        />

        <h3 className="text-sm">Blog</h3>
        {posts
          .splice(0, 2)
          .map(
            (post) =>
              post && (
                <BlogPost
                  key={post.title}
                  href={`/blog/${post.slug}`}
                  title={post.title}
                  description={post.description}
                  imageUrl={post.image}
                />
              )
          )}
        <div className="flex justify-end items-center">
          <Link
            href="/blog"
            className="px-4 flex gap-2 items-center rounded-lg text-zinc-400 text-sm
           hover:text-zinc-200 transition-all"
          >
            All posts <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
