import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "https://betool.fr/",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;