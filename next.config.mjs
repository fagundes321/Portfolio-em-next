/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
    dangerouslyAllowSVG: true, // Permite o uso de imagens SVG remotas
    contentSecurityPolicy: "default-src 'self'; img-src * data: blob:;",
  },
};

export default nextConfig;
