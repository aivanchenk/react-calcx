import type { buttonProps } from "../Button/Button";

type Key = Omit<buttonProps, "onClick">;

export const buttonList: Key[] = [
  // ───────────── 1st row ─────────────
  { dataKey: "⇦⇨", content: "⇦⇨", className: "scientific" },
  { dataKey: "RAD", content: "RAD", className: "scientific" },
  { dataKey: "√", content: "√", className: "scientific" },
  { dataKey: "C", content: "C", className: "primaryRed" },
  { dataKey: "(", content: "(" },
  { dataKey: "%", content: "%" },
  { dataKey: "÷", content: "÷" },

  // ───────────── 2nd row ─────────────
  { dataKey: "sin", content: "sin", className: "scientific" },
  { dataKey: "cos", content: "cos", className: "scientific" },
  { dataKey: "tan", content: "tan", className: "scientific" },
  { dataKey: "7", content: "7" },
  { dataKey: "8", content: "8" },
  { dataKey: "9", content: "9" },
  { dataKey: "×", content: "×" },

  // ───────────── 3rd row ─────────────
  { dataKey: "ln", content: "ln", className: "scientific" },
  { dataKey: "log", content: "log", className: "scientific" },
  { dataKey: "1/x", content: "1/x", className: "scientific" },
  { dataKey: "4", content: "4" },
  { dataKey: "5", content: "5" },
  { dataKey: "6", content: "6" },
  { dataKey: "−", content: "−" },

  // ───────────── 4th row ─────────────
  { dataKey: "eˣ", content: "eˣ", className: "scientific" },
  { dataKey: "x²", content: "x²", className: "scientific" },
  { dataKey: "xʸ", content: "xʸ", className: "scientific" },
  { dataKey: "1", content: "1" },
  { dataKey: "2", content: "2" },
  { dataKey: "3", content: "3" },
  { dataKey: "+", content: "+" },

  // ───────────── 5th row ─────────────
  { dataKey: "|x|", content: "|x|", className: "scientific" },
  { dataKey: "π", content: "π", className: "scientific" },
  { dataKey: "e", content: "e", className: "scientific" },
  { dataKey: "±", content: "±" },
  { dataKey: "0", content: "0" },
  { dataKey: ".", content: "." },
  { dataKey: "=", content: "=", className: "primaryBlue" },
];
