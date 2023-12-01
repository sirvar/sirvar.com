import { getPosts } from "@/db/blog";

export default async function sitemap() {
  const posts = await getPosts();
  const blogs = posts.map((post) => ({
    url: `https://sirvar.com/blog/${post.slug}`,
    lastModified: post.date.toISOString().split("T")[0],
  }));

  const routes = ["", "/blog", "/photography", "/travel"].map((route) => ({
    url: `https://sirvar.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
