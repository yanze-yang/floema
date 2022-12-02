import * as React from "react";
import {
  SplitText,
  WordWrapperProp,
  LineWrapperProp,
} from "@cyriacbr/react-split-text";
import { motion } from "framer-motion";

const WordWrapper: React.FC<WordWrapperProp> = ({ children, wordIndex }) => {
  return (
    <motion.span
      transition={{
        ease: "easeOut",
        duration: 0.8,
        delay: 0.1 * wordIndex,
      }}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      style={{ display: "inline-block", whiteSpace: "pre" }}
    >
      {children}
    </motion.span>
  );
};
const LineWrapper: React.FC<LineWrapperProp> = ({ children }) => {
  return (
    <span style={{ overflow: "hidden", display: "block" }}>{children}</span>
  );
};
const MemoizedWordWrapper = React.memo(WordWrapper);
const MemoizedLineWrapper = React.memo(LineWrapper);

export default function RaiseText({ children }: { children: React.ReactNode }) {
  return (
    <SplitText
      WordWrapper={MemoizedWordWrapper}
      LineWrapper={MemoizedLineWrapper}
    >
      {children}
    </SplitText>
  );
}
