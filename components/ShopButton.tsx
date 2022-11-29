import React from "react";

type Props = {
  className?: string | null;
};

export default function ShopButton({ className }: Props) {
  return (
    <div className={`${className} font-serif font-light text-3xl md:text-5xl`}>
      Shop it &gt;&gt;
    </div>
  );
}
