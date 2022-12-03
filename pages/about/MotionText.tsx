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
          display: "inline-block",
        }}
      >
        <motion.span
          transition={{
            ease: "easeOut",
            duration: 0.6,
            delay: 0.1 * index,
          }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            overflow: "hidden",
            //   padding: "0 2rem",
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
