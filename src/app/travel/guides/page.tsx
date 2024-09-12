import { BlogSubscription } from "@/app/_components/blog-subscription";
import City from "@/app/travel/guides/components/city";
import { guides } from "@/app/travel/guides/data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "A collection of travel guides for cities I've visited over the years.",
};

export default async function TravelGuides() {
  return (
    <main className="md:pt-24 pt-8">
      <h1 className="text-5xl text-zinc-600 text-center	font-medium mt-16 md:mt-24">
        Guides.
      </h1>
      <div className="my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {guides
          .sort((prev, next) => (prev.location < next.location ? -1 : 1))
          .map((guide, index) => (
            <City
              key={guide.location}
              guide={guide}
              className={index % 2 === 0 ? "sm:mr-0" : "sm:ml-0"}
            />
          ))}
      </div>
      <BlogSubscription className="mb-16" />
    </main>
  );
}
