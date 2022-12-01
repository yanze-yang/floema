import React from "react";

type IconProps = {
  src: string;
  type: string;
  alt: string;
};

export default function DescriptionIcon({ src, type, alt }: IconProps) {
  return (
    <picture>
      <source srcSet={src} type={`image/${type}`} />
      <img src={src} alt={alt} />
    </picture>
  );
}
