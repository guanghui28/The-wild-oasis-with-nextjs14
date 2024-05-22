/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "nscquxpozufcweswzuob.supabase.co",
				port: "",
				pathname: "/storage/v1/object/public/cabin_images/**",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				port: "",
				pathname:
					"/a/ACg8ocI0jmgm_E48eAr30qdfgVJg_V3bDNkKOPc97HeEO7mAfE4spilv=s96-c",
			},
		],
	},
};

export default nextConfig;
