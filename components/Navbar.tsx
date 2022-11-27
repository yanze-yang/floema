/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <div className="bg-greyRed py-6 px-6">
      <div>
        <div className="relative flex items-center justify-between">
          <img
            className="block w-32 "
            src="/logo_white.svg"
            alt="Your Company"
          />
          <div className="font-serif text-2xl tracking-wide">About</div>
        </div>
      </div>
    </div>
  );
}
