import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "betool-crm.vercel.app/",
                destination: "https://betool.fr/",
                permanent: false,
            },
        ];
    },
};

export default nextConfig;