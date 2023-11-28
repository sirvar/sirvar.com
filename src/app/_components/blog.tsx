import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BlogProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const BlogPost: React.FC<BlogProps> = ({
  title,
  description,
  imageUrl,
  href,
}) => {
  return (
    <Link href={href}>
      <div className="flex gap-4 p-2 hover:bg-zinc-800 rounded-lg transition-colors">
        <img
          className="w-36 h-24 rounded object-cover"
          src={imageUrl}
          alt="placeholder"
        />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h4 className="text-sm">{title}</h4>
            <ArrowUpRight className="w-3 h-3" />
          </div>
          <p className="text-sm font-light text-zinc-400">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
