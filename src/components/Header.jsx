import Image from "next/image";

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between max-w-6xl ">
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            src={"/Instagram.png"}
            layout="fill"
            className="object-contain"
            alt="instagram"
          />
        </div>
        <div className="h-24 w-24 relative lg:hidden cursor-pointer">
          <Image
            src={"/Instagram2.png"}
            layout="fill"
            className="object-contain"
            alt="instagram"
          />
        </div>
        <h1>Instagram</h1>
      </div>
    </div>
  );
}
