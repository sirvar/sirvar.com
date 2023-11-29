import Photo from "@/app/photography/_components/photo";
import { OrderBy, createApi } from "unsplash-js";

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

  return (
    <main className="md:p-24 p-12">
      <h1 className="text-5xl text-zinc-800 text-center	font-medium my-16 md:my-24">
        Photography.
      </h1>
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
