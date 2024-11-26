import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home page',
    description: 'Page description',
    keywords: ['page', 'keywords']
};

// eslint-disable-next-line functional/functional-parameters
export default function Page() {
    return <h1>Home page</h1>;
}
