import React from "react";
export interface LineWrapperProp<T = any> {
  /**
   * The current index of the line.
   */
  lineIndex: number;
  /**
   * Extra props forwarded from SplitText.
   */
  children?: React.ReactNode;
  extraProps?: T;
}
export declare const LineWrapper: React.FC<LineWrapperProp>;
export interface WordWrapperProp<T = any> {
  /**
   * The current line index where the word wrapper lives.
   */
  lineIndex: number;
  /**
   * The current index of the word.
   */
  wordIndex: number;
  /**
   * The current index of the total wrapped words inside <SplitText />.
   */
  countIndex: number;
  /**
   * Extra props forwarded from SplitText.
   */
  children?: React.ReactNode;
  extraProps?: T;
}
export declare const WordWrapper: React.FC<WordWrapperProp>;
export interface LetterWrapperProp<T = any> {
  /**
   * The current line index where the letter wrapper lives.
   */
  lineIndex: number;
  /**
   * The current word index where the letter wrapper lives.
   */
  wordIndex: number;
  /**
   * The current index of the letter.
   */
  letterIndex: number;
  /**
   * The current index of the total wrapped letters inside <SplitText />.
   */
  countIndex: number;
  /**
   * Extra props forwarded from SplitText.
   */
  children?: React.ReactNode;
  extraProps?: T;
}
export declare const LetterWrapper: React.FC<LetterWrapperProp>;
