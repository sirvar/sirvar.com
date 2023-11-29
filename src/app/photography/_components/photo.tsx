import Image from "next/image";
import { Basic } from "unsplash-js/dist/methods/photos/types";

interface PhotoProps {
  photo: Basic;
  width?: number;
}

const Photo: React.FC<PhotoProps> = ({ photo, width = 230 }) => {
  return (
    <a href={photo.links.html} target="_blank" rel="noreferrer">
      <div className="relative group rounded-lg overflow-hidden">
        <Image
          src={photo.urls.regular}
          width={width}
          height={photo.height}
          alt={photo.alt_description || "Photo by Sirvar"}
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        <span className="absolute bottom-0 left-0 m-2 text-white text-sm hidden group-hover:block">
          {photo.description}
        </span>
      </div>
    </a>
  );
};

export default Photo;
