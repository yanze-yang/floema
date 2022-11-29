import Link from "next/link";
import CloseButton from "./CloseButton";

type NavbarProps = {
  isDetailPage?: true | null;
};

export default function Navbar({ isDetailPage }: NavbarProps) {
  return (
    <div className="bg-Quicksand px-6 pt-6 pb-6 md:pt-16 md:pb-6 md:px-12 ">
      <div className="relative flex items-center justify-between">
        <picture className="block w-36 md:w-72">
          <source srcSet="/logo_white.svg" type="image/webp" />
          <img src="/logo_white.svg" alt="logo" />
        </picture>
        <div className="font-serif text-2xl tracking-wide md:text-5xl">
          About
        </div>
      </div>
      {isDetailPage ? (
        <div className="flex justify-center">
          <CloseButton className="mt-6 md:mt-10" />
        </div>
      ) : null}
    </div>
  );
}
