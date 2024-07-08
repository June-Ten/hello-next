import Image from "next/image"
import { Metadata } from 'next'
import {Button} from "@nextui-org/button";

export const metadata: Metadata = {
  title: 'Next.js',
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Button>Press me</Button>
    </main>
  );
}
