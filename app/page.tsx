import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4 h-dvh justify-center items-center">
      <span className="text-7xl">Home</span>
      <Image src={"/gato-icon.png"} alt="Home" width={300} height={300} />
      <Link
        className="border-2 border-pink-600 px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition-all"
        href={"/about"}
      >
        Sobre nosotros
      </Link>
    </main>
  );
}
