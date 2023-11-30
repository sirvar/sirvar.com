/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Include Unsplash domain in Next.js image optimization
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
