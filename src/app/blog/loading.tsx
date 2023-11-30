import { Skeleton } from "@/app/_components/skeleton";

export default function LoadingBlog() {
  return (
    <main className="md:p-24 p-8">
      <h1 className="text-5xl text-zinc-800 text-center	font-medium my-16 md:my-24">
        Blog.
      </h1>
      <div className="flex gap-4 p-2 rounded-lg transition-colors">
        <Skeleton className="grow-0 shrink-0 basis-36 w-36 h-24 rounded object-cover" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-32 h-3" />
          <Skeleton className="w-60 h-5" />
        </div>
      </div>
    </main>
  );
}
