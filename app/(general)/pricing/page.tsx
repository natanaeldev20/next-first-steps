import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Pagina de precios de mi servicio",
};

export default function PricingPage() {
  return (
    <>
      <span className="text-6xl sm:text-7xl">Precios</span>
      <Image src={"/pricing.png"} alt="Pricing" width={250} height={250} />
    </>
  );
}
