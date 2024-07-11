import Image from "next/image"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js',
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      Press me 测试github webhooks jenkins
    </main>
  );
}
