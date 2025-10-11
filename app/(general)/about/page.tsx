import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About page",
  description: "Esta es la pagina de about",
  keywords: ["About", "Mas informacion", "Descubre mas"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-center text-6xl sm:text-7xl">Sobre Nosotros</span>
      <Image src={"/about.png"} alt="About" width={250} height={250} />
    </>
  );
}
