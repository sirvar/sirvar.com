import { LucideIcon } from "lucide-react";

interface IconProps {
  href: string;
  title: string;
  Icon: LucideIcon;
}

const Icon: React.FC<IconProps> = ({ Icon, ...props }) => {
  return (
    <a
      {...props}
      className="w-8 sm:w-10 h-8 sm:h-10 flex justify-center items-center p-2 border rounded-lg border-zinc-800 hover:border-zinc-600 transition-all hover:bg-zinc-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-zinc-300 hover:text-white transition-colors w-5 h-5" />
    </a>
  );
};

export default Icon;
