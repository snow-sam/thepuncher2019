import Image from 'next/image';
import Logo from '@/public/ghost.svg';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="flex w-full justify-center h-fit bg-neutral-950 px-4 py-2">
      <Image src={Logo} height={28} alt="logo" />
    </nav>
  );
}
