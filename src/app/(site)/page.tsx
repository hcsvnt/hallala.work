import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Page description',
  keywords: ['page', 'keywords'],
}

export default function Page() {
  return <h1>Home page</h1>
}
