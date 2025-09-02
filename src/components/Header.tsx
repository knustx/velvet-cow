import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-dark border-b-2 border-primary py-3">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-start">
            <Image
              src="/logo.png"
              alt="Velvet Cow"
              width={360}
              height={120}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
