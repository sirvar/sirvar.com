import fs from "fs";
import RSS from "rss";
import path from "path";
import matter from "gray-matter";

const posts = fs
  .readdirSync(path.resolve(__dirname, "../posts/"))
  .filter(
    (file) => path.extname(file) === ".md" || path.extname(file) === ".mdx"
  )
  .map((file) => {
    const postContent = fs.readFileSync(`./posts/${file}`, "utf8");
    const { data, content }: { data: any; content: string } =
      matter(postContent);
    return { ...data, body: content, slug: file.replace(".mdx", "") };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const main = () => {
  const feed = new RSS({
    title: "Rikin Katyal",
    site_url: "https://sirvar.com",
    feed_url: "https://sirvar.com/rss.xml",
    language: "en",
    description: "Rikin Katyal's blog",
  });

  posts.forEach((post) => {
    const url = `https://sirvar.com/blog/${post.slug}`;

    feed.item({
      title: post.title,
      description: post.description,
      date: new Date(post?.date),
      author: "Rikin Katyal",
      url,
      guid: url,
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync(path.join(__dirname, "../public/rss.xml"), rss);
};

main();
