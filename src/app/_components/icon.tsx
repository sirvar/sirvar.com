import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface IconProps {
  href: string;
  Icon: LucideIcon;
}

const Icon: React.FC<IconProps> = ({ href, Icon }) => {
  return (
    <a
      href={href}
      className="p-2 border rounded-lg border-zinc-800 hover:border-zinc-600 transition-all hover:bg-zinc-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-zinc-300 hover:text-white transition-colors w-5 h-5" />
    </a>
  );
};

export default Icon;
