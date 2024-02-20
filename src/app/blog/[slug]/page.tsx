import { mdxComponents } from "@/app/blog/[slug]/_components/markdown-components";
import { increment } from "@/db/actions";
import { getPost, getPosts } from "@/db/blog";
import { getViewCount } from "@/db/queries";
import { formatDate } from "@/utils/date";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { cache } from "react";

interface BlogProps {
  params: { slug: string };
}

export async function generateMetadata({
  params: { slug },
}: BlogProps): Promise<Metadata | undefined> {
  const post = await getPost(slug);
  if (!post) {
    return;
  }

  let { title, date, description, image } = post;
  let ogImage = `https://sirvar.com${image}`;

  return {
    title,
    description,
    metadataBase: new URL("https://sirvar.com/blog"),
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date.toDateString(),
      url: `https://sirvar.com/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  // The params to pre-render the page with.
  // Without this, the page will be rendered at runtime
  return posts.map((post) => ({ slug: post?.slug }));
}

const incrementCache = cache(increment);

export default async function BlogPost({ params: { slug } }: BlogProps) {
  const post = await getPost(slug);
  const views = await getViewCount(slug);
  incrementCache(slug);

  if (!post) {
    return (
      <main className="md:p-24 p-8 text-center">
        <h1 className="text-5xl text-zinc-600 text-center	font-medium my-16 md:my-24">
          Oops.
        </h1>
        <article className="prose prose-quoteless prose-invert mt-12">
          <p>
            Blog post not found. Double check the link or{" "}
            <Link href="/blog">click here</Link> to see all posts.
          </p>
        </article>
      </main>
    );
  }

  return (
    <main className="md:py-24 py-12 px-6 md:px-0">
      <h1 className="text-2xl text-zinc-200 font-medium mt-16 md:mt-24">
        {post.title}
      </h1>
      <div className="flex flex-row justify-between">
        <p className="text-sm font-light text-zinc-300">
          {formatDate(post.date)}
        </p>
        <p className="text-sm font-light text-zinc-300">
          {views?.rows?.[0]?.count || 0} views
        </p>
      </div>
      <article className="prose prose-quoteless prose-invert mt-12">
        <MDXRemote source={post.body || ""} components={mdxComponents} />
      </article>
    </main>
  );
}
