import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getViewCount(slug: string) {
  if (!process.env.POSTGRES_URL) {
    return null;
  }
  noStore();
  return sql`
    SELECT slug, count
    FROM views
    WHERE slug = ${slug}
  `;
}
