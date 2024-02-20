import { getViewCount } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  title: string;
  date: string;
  imageUrl: string;
  slug: string;
}

const BlogPost: React.FC<BlogProps> = async ({
  title,
  date,
  imageUrl,
  slug,
}) => {
  const views = await getViewCount(slug);

  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex gap-4 p-2 hover:bg-zinc-800 rounded-lg transition-colors">
        <Image
          className="grow-0 shrink-0 basis-36 w-36 h-24 rounded object-cover"
          src={imageUrl}
          width={144}
          height={96}
          alt="placeholder"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-light text-zinc-300">{date}</p>
            <h4 className="text-md">{title}</h4>
          </div>
          <p className="text-xs font-light text-zinc-300 mb-0">
            {views?.rows?.[0].count} views
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
