import { BlogSubscription } from "@/app/_components/blog-subscription";
import BlogPost from "@/app/blog/_components/blog";
import { getPosts } from "@/db/blog";
import { formatDate } from "@/utils/date";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of my thoughts and ideas over the years.",
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="md:p-24 p-8">
      <h1 className="text-5xl text-zinc-600 text-center	font-medium my-16 md:my-24">
        Blog.
      </h1>
      <div className="flex flex-col gap-4">
        {posts.map((post) =>
          post ? (
            <BlogPost
              key={post.title}
              slug={post.slug}
              title={post.title}
              date={formatDate(post.date)}
              imageUrl={post.image}
            />
          ) : null
        )}
        <BlogSubscription />
      </div>
    </main>
  );
}
