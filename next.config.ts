import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "rajyadainik.com",
      },
    ],
  },
};

export default nextConfig;

// Local-only: enables `.dev.vars` secrets + Cloudflare bindings for
// `opennextjs-cloudflare dev` / `preview`. No-op in the Cloudflare build
// pipeline and on machines where workerd cannot run (macOS < 13.5).
if (process.env.INIT_OPENNEXT_CLOUDFLARE) {
  import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
}
