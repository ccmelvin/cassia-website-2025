"use client";
import Link from "next/link";
import { RiTiktokLine, RiInstagramLine, RiPinterestLine, RiYoutubeLine } from "react-icons/ri";
import Image from "next/image";
import { Mail } from "react-feather";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-lime-200 via-yellow-100 to-lime-200 text-teal-800 flex flex-col md:flex-row">
      {/* Left Section with Content */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between order-1 md:order-none">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight mt-6">
            Cassia Melvin
            <br />
            and Alex 🐶
          </h1>
          
          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            <Link
              href="https://www.youtube.com/@CassiaMelvin/"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiYoutubeLine size={28} />
              <span className="sr-only">Youtube</span>
            </Link>
            <Link
              href="https://www.instagram.com/cassiacmelvin/"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramLine size={28} />
              <span className="sr-only">Instagram</span>
            </Link>

            <Link
              href="https://www.pinterest.com/cassiamelvin/"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiPinterestLine size={28} />
              <span className="sr-only">Pinterest</span>
            </Link>

            <Link
              href="https://www.tiktok.com/@cassiamelvin"
              className="hover:opacity-70 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTiktokLine size={28} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>

          {/* Contact Link */}
          <Link
            href="/contact"
            className="flex items-center gap-3 mt-6 w-fit p-3 hover:bg-white/30 rounded-lg transition-colors group"
          >
            <Mail size={20} className="text-teal-800" />
            <span className="text-xl">Contato</span>
          </Link>
        </div>

        <p className="text-lg md:text-xl max-w-md mt-12 md:mt-0">
          Em breve, meu novo site estará no ar!
          <br />
          <br />
          Vou compartilhar como transformo receitas brasileiras com ingredientes
          americanos, recriando os sabores da nossa terra de um jeito único.
          <br />
          <br />
          Além disso, vou mostrar um pouco da minha vida em um lugar que poucos
          conhecem em uma cidade do interior dos Estados Unidos.
          <br/> <br/>
          O estado da
          Carolina do Norte (NC), as praias do Atlântico (como Outer Banks,
          famosa por seus faróis e dunas) até as montanhas dos Apalaches (como a
          região de Asheville, com florestas e cachoeiras).
        </p>
      </div>

      {/* Right Section with Hero Image - Fixed for mobile */}
      <div className="w-full md:w-1/2 h-96 md:h-auto relative order-0 md:order-none">
        <Image
          src="/cassiamelvin-alex.jpeg"
          alt="Cassia Melvin and Alex"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-lime-200/10 via-transparent to-transparent"></div>
      </div>
    </main>
  );
}