import Link from "next/link";
import CloseButton from "./CloseButton";

type NavbarProps = {
  isDetailPage?: true | null;
};

export default function Navbar({ isDetailPage }: NavbarProps) {
  return (
    <div className="bg-Quicksand pt-16 pb-6 px-12 ">
      <div className="relative flex items-start justify-between">
        <picture className="block w-72">
          <source srcSet="/logo_white.svg" type="image/webp" />
          <img src="/logo_white.svg" alt="logo" />
        </picture>
        <div className="font-serif text-5xl tracking-wide">About</div>
      </div>
      {isDetailPage ? (
        <div className="flex justify-center">
          <CloseButton className="mt-10" />
        </div>
      ) : null}
    </div>
  );
}
