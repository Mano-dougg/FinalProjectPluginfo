/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    compiler:{
        styledComponents: true
    },
    images: {
        domains: ['shine-original.s3.sa-east-1.amazonaws.com'],
    },
};

export default nextConfig;
