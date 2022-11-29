import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ContainerMeduim({ children }: Props) {
  return <div className="px-12">{children}</div>;
}
