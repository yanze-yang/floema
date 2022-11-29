type NavbarProps = {
  isDetailPage?: true | null;
};

export default function Navbar({ isDetailPage }: NavbarProps) {
  return (
    <div className="bg-Quicksand pt-16 px-12 mb-">
      <div className="relative flex items-start justify-between">
        <picture className="block w-72">
          <source srcSet="/logo_white.svg" type="image/webp" />
          <img src="/logo_white.svg" alt="logo" />
        </picture>
        <div className="font-serif text-5xl tracking-wide">About</div>
      </div>
      {isDetailPage ? (
        <div className="flex justify-center">
          <div
            className="mt-10 w-72 h-32 border-solid border border-white flex justify-center items-center"
            style={{ borderRadius: "50%" }}
          >
            <span className="font-extralight font-sans text-3xl ">CLOSE</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
