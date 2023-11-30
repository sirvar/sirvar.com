import matter from "gray-matter";
import path from "path";
import fs from "fs/promises";
import { Post } from "@/app/types";
import { cache } from "react";

export const getPosts = cache(async () => {
  const posts = await fs.readdir("./src/posts");

  const allPosts = await Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./src/posts/${file}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        return { ...data, body: content, slug: file.split(".mdx")[0] } as Post;
      })
  );

  // Filter out null values and sort by date
  return allPosts.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });
});

export async function getPost(slug: string) {
  const posts = await getPosts();

  return posts.find((post) => post?.slug === slug);
}
