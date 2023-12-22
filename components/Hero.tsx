import { Button } from '@/components/ui/button';
import Image from 'next/image';
import WhatsAppLogo from '@/public/whatsapp.svg';

export default function Hero() {
  const telefone = '5511934949012';
  const mensagemWhats = 'Olá gostaria de saber mais do clã';
  return (
    <div
      id="hero"
      className="flex w-full justify-center items-center h-fit relative bg-cover bg-center"
    >
      <div className="text-center py-10 gap-2 md:gap-4 text-white w-full h-full flex flex-col justify-center bg-neutral-900/90">
        <span className="font-medium md:text-xl">CALL OF DUTY MOBILE</span>
        <span className="bg-[#a0915f] text-center md:text-2xl font-bold mx-auto px-4 py-1 md:px-8 md:py-3 w-fit">
          CLÃ THE PUNISHER 19
        </span>
        <h1>VISTA-SE PARA VENCER!</h1>
        <p className="text-xs md:text-sm md:w-[30rem] w-[25rem] mx-auto">
          Vista a paixão do seu jogo favorito com nossas camisas exclusivas e
          una-se ao clã de campeões nacionais! Fale conosco
        </p>
        <a
          href={`https://wa.me/?phone=${telefone}&text=${mensagemWhats}&type=phone_number&app_absent=0`}
        >
          <Button className="w-fit mx-auto bg-green-800 flex gap-2">
            <Image src={WhatsAppLogo} width={16} alt="logo whatsapp" />
            Entrar Agora
          </Button>
        </a>
      </div>
    </div>
  );
}
