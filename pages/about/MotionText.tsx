import React from "react";
import { motion } from "framer-motion";

export default function MotionText({
  children,
}: {
  children: React.ReactNode;
}) {
  const Span = ({
    index,
    children,
  }: {
    index: number;
    children: React.ReactNode;
  }) => {
    return (
      <span
        style={{
          overflow: "hidden",
          verticalAlign: "top",
          display: "inline-block",
        }}
      >
        <motion.span
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: 0.03 * index,
          }}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {children}
        </motion.span>
      </span>
    );
  };

  return (
    <>
      {children
        ?.toString()
        .split(" ")
        .map((item, index) => {
          return (
            <Span key={index} index={index}>
              {`${item} `}
            </Span>
          );
        })}
    </>
  );
}
