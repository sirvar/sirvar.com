/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Include Unsplash domain in Next.js image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "overseerr.sirvar.com",
            },
          ],
          destination: "https://overseerr-sirvar.janus.usbx.me/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
