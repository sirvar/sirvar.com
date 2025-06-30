import Photo from "@/app/photography/_components/photo";
import DelayedButton from "@/app/photography/_components/delayed-button";
import { Metadata } from "next";
import { OrderBy, createApi } from "unsplash-js";
import { unstable_cache } from "next/cache";

export const metadata: Metadata = {
  title: "Photography",
  description: "A collection of my favourite photos over the years.",
};

const getUnsplashData = unstable_cache(
  async () => {
    const unsplash = createApi({
      accessKey: process.env.UNSPLASH_API_KEY!,
    });

    const [photosResponse, statsResponse] = await Promise.all([
      unsplash.users.getPhotos({
        username: "sirvar",
        perPage: 30,
        orderBy: OrderBy.POPULAR,
      }),
      unsplash.users.getStatistics({
        username: "sirvar",
        quantity: 1,
      }),
    ]);

    return {
      photos: photosResponse.response?.results || [],
      stats: statsResponse.response,
    };
  },
  ["unsplash-photography-data"],
  {
    revalidate: 3600, // Revalidate every hour (3600 seconds)
    tags: ["unsplash-data"],
  }
);

export default async function Photography() {
  const { photos, stats } = await getUnsplashData();

  const left = [];
  const right = [];

  for (let i = 0; i < photos!.length; i++) {
    if (i % 2 === 0) {
      left.push(photos![i]);
    } else {
      right.push(photos![i]);
    }
  }

  return (
    <main className="md:p-24 p-8">
      <h1 className="text-5xl text-zinc-600 text-center	font-medium mt-16 md:mt-24">
        Photography.
      </h1>
      <p className="text-xl text-zinc-700 text-center font-medium mt-6 mb-16">
        {stats?.views.total.toLocaleString()} views.{" "}
        {stats?.downloads.total.toLocaleString()} downloads.
      </p>
      <div className="hidden md:flex justify-center gap-4">
        <div className="flex flex-col gap-4">
          {left.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {right.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-4 max-w-xl mx-auto">
        {photos!.map((photo) => (
          <Photo key={photo.id} photo={photo} width={640} />
        ))}
      </div>
      <DelayedButton />
    </main>
  );
}
