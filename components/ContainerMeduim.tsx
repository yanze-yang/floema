import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ContainerMeduim({ children }: Props) {
  return <div className="px-6 sm:px-10 md:px-14">{children}</div>;
}
