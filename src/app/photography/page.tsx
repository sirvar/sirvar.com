import Photo from "@/app/photography/_components/photo";
import { Metadata } from "next";
import { OrderBy, createApi } from "unsplash-js";

export const metadata: Metadata = {
  title: "Photography",
  description: "A collection of my favourite photos over the years.",
};

export default async function Photography() {
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_API_KEY!,
  });

  const photos = (
    await unsplash.users.getPhotos({
      username: "sirvar",
      perPage: 30,
      orderBy: OrderBy.POPULAR,
    })
  ).response?.results;
  const left = [];
  const right = [];

  for (let i = 0; i < photos!.length; i++) {
    if (i % 2 === 0) {
      left.push(photos![i]);
    } else {
      right.push(photos![i]);
    }
  }

  const stats = await unsplash.users.getStatistics({
    username: "sirvar",
    quantity: 1,
  });

  return (
    <main className="md:p-24 p-8">
      <h1 className="text-5xl text-zinc-600 text-center	font-medium mt-16 md:mt-24">
        Photography.
      </h1>
      <p className="text-xl text-zinc-700 text-center font-medium mt-6 mb-16">
        {stats.response?.views.total.toLocaleString()} views.{" "}
        {stats.response?.downloads.total.toLocaleString()} downloads.
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
      <div className="mt-10 flex justify-center items-center">
        <a
          href="https://unsplash.com/@sirvar"
          className="px-4 py-2 border rounded-lg border-zinc-800 text-sm
           hover:border-zinc-600 hover:bg-zinc-800 transition-all"
          target="_blank"
          rel="noreferrer"
        >
          See more
        </a>
      </div>
    </main>
  );
}
