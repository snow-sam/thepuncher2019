import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex flex-col w-full h-[100dvh]">
      <Navbar />
      <Hero />
    </main>
  );
}
