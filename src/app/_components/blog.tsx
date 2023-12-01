import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
        <Image
          className="grow-0 shrink-0 basis-36 w-36 h-24 rounded object-cover"
          src={imageUrl}
          width={144}
          height={96}
          alt="placeholder"
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-start">
            <h4 className="text-sm">{title}</h4>
            <ArrowUpRight className="grow-0 shrink-0 w-3 h-3" />
          </div>
          <p className="text-sm font-light text-zinc-400">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
