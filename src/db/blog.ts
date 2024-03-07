"use server";

import matter from "gray-matter";
import path from "path";
import fs from "fs/promises";
import { Post } from "@/app/types";
import { cache } from "react";
import { Resend } from "resend";

export const getPosts = async () => {
  const postPath = path.join(process.cwd(), "posts");
  const posts = await fs.readdir(postPath);

  const allPosts = await Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `${postPath}/${file}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        return { ...data, body: content, slug: file.split(".mdx")[0] } as Post;
      })
  );

  // Filter out null values and sort by date
  return allPosts.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });
};

export async function getPost(slug: string) {
  const posts = await getPosts();

  return posts.find((post) => post?.slug === slug);
}

export async function subscribe(_: any, formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined");
  }

  if (!process.env.RESEND_BLOG_ID) {
    throw new Error("RESEND_BLOG_ID is not defined");
  }
  const email = formData.get("email")?.toString();

  if (!email) {
    throw new Error("Email is required");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const res = await resend.contacts.create({
    email,
    unsubscribed: false,
    audienceId: process.env.RESEND_BLOG_ID,
  });

  if (res.error) {
    return { success: false, message: res.error.message };
  } else {
    return { success: true, message: "Stay tuned!" };
  }
}
