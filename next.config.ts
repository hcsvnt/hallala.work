import { withPayload } from '@payloadcms/next/withPayload';
import initializeBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
});

const nextConfig: NextConfig = {
    // Your Next.js config here
    // pageExtensions: ['mdx', 'ts', 'tsx'] // uncomment to add support for MDX
};

export default withBundleAnalyzer(withPayload(nextConfig));
