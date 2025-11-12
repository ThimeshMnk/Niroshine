import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',

  basePath: '/Niroshine', 
  
  trailingSlash: true, 

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
