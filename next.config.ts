/** @type {import('next').NextConfig} */
const nextConfig = {
  turbo: {
    enabled: false,
  },
  images: {
    domains: ["mobixsystemsinc.com"], // ← гадаад зургийн домэйн энд нэмэгдлээ
  },
};

export default nextConfig;
