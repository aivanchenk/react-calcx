import type { buttonProps } from "../Button/Button";

type Key = Omit<buttonProps, "onClick">;

export const buttonList: Key[] = [
  // ───────────── 1st row ─────────────
  { dataKey: "⇦⇨", content: "⇦⇨" },
  { dataKey: "RAD", content: "RAD" },
  { dataKey: "√", content: "√" },
  { dataKey: "C", content: "C", primary: "red" },
  { dataKey: "(", content: "(" },
  { dataKey: "%", content: "%" },
  { dataKey: "÷", content: "÷" },

  // ───────────── 2nd row ─────────────
  { dataKey: "sin", content: "sin" },
  { dataKey: "cos", content: "cos" },
  { dataKey: "tan", content: "tan" },
  { dataKey: "7", content: "7" },
  { dataKey: "8", content: "8" },
  { dataKey: "9", content: "9" },
  { dataKey: "×", content: "×" },

  // ───────────── 3rd row ─────────────
  { dataKey: "ln", content: "ln" },
  { dataKey: "log", content: "log" },
  { dataKey: "1/x", content: "1/x" },
  { dataKey: "4", content: "4" },
  { dataKey: "5", content: "5" },
  { dataKey: "6", content: "6" },
  { dataKey: "−", content: "−" },

  // ───────────── 4th row ─────────────
  { dataKey: "eˣ", content: "eˣ" },
  { dataKey: "x²", content: "x²" },
  { dataKey: "xʸ", content: "xʸ" },
  { dataKey: "1", content: "1" },
  { dataKey: "2", content: "2" },
  { dataKey: "3", content: "3" },
  { dataKey: "+", content: "+" },

  // ───────────── 5th row ─────────────
  { dataKey: "|x|", content: "|x|" },
  { dataKey: "π", content: "π" },
  { dataKey: "e", content: "e" },
  { dataKey: "±", content: "±" },
  { dataKey: "0", content: "0" },
  { dataKey: ".", content: "." },
  { dataKey: "=", content: "=", primary: "blue" },
];
