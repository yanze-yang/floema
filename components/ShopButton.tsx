import React from "react";

type Props = {
  className?: string | null;
};

export default function ShopButton({ className }: Props) {
  return (
    <div
      className={`${className} font-serif font-light text-4xl sm:text-6xl md:text-8xl`}
    >
      Shop it &gt;&gt;
    </div>
  );
}