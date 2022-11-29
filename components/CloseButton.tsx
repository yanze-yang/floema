import Link from "next/link";
import React from "react";

type Props = {
  className?: string | null;
};

export default function CloseButton({ className }: Props) {
  return (
    <div
      className={`${className} w-72 h-32 border-solid border border-white flex justify-center items-center`}
      style={{ borderRadius: "50%" }}
    >
      <span className="font-extralight font-sans text-3xl">
        <Link href="/collection">CLOSE</Link>
      </span>
    </div>
  );
}
