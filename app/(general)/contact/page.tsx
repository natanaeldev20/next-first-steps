import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Pagina de contactos",
};

export default function ContactPage() {
  return (
    <>
      <span className="text-6xl sm:text-7xl">Contacto</span>
      <Image src={"/contact.png"} alt="Contact" width={250} height={250} />
    </>
  );
}
