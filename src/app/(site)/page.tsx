import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home page',
    description: 'Page description',
    keywords: ['page', 'keywords']
};

// todo: make this nicer one day
// eslint-disable-next-line functional/functional-parameters
export default function Page() {
    return <h1>next js + payload cms template</h1>;
}
