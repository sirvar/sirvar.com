interface ExperienceProps {
  startYear: string | number;
  endYear: string | number;
  title: string;
  company: string;
  link: string;
  description: string;
}

const Experience: React.FC<ExperienceProps> = ({
  startYear,
  endYear,
  title,
  company,
  link,
  description,
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex grow-0 shrink-0 justify-between w-20">
        <p className="font-light text-xs text-zinc-300">{startYear}</p>
        <p className="font-light text-xs text-zinc-300">&mdash;</p>
        <p className="font-light text-xs text-zinc-300">{endYear}</p>
      </div>
      <div>
        <h4 className="leading-4 text-sm">{title}</h4>
        <p className="text-xs text-zinc-300 mt-1 mb-2 w-max hover:underline">
          <a href={link} target="_blank">
            {company}
          </a>
        </p>
        <p className="text-sm font-light text-zinc-300">{description}</p>
      </div>
    </div>
  );
};

export default Experience;
