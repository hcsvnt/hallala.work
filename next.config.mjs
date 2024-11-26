import { withPayload } from '@payloadcms/next/withPayload'
import initializeBundleAnalyzer from '@next/bundle-analyzer';

// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = initializeBundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
}

export default withBundleAnalyzer(withPayload(nextConfig))
