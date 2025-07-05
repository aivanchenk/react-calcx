import type { buttonProps } from "../Button/Button";

type Key = Pick<buttonProps, "dataKey" | "content">;

export const buttonList: Key[] = [
  // ───────────── 1st row ─────────────
  { dataKey: "change", content: "⇦⇨" }, // back-space
  { dataKey: "rad", content: "RAD" },
  { dataKey: "sqrt", content: "√" },
  { dataKey: "clear", content: "C" },
  { dataKey: "paren", content: "(" },
  { dataKey: "percent", content: "%" },
  { dataKey: "divide", content: "÷" },

  // ───────────── 2nd row ─────────────
  { dataKey: "sin", content: "sin" },
  { dataKey: "cos", content: "cos" },
  { dataKey: "tan", content: "tan" },
  { dataKey: "7", content: "7" },
  { dataKey: "8", content: "8" },
  { dataKey: "9", content: "9" },
  { dataKey: "multiply", content: "×" },

  // ───────────── 3rd row ─────────────
  { dataKey: "ln", content: "ln" },
  { dataKey: "log", content: "log" },
  { dataKey: "recip", content: "1/x" },
  { dataKey: "4", content: "4" },
  { dataKey: "5", content: "5" },
  { dataKey: "6", content: "6" },
  { dataKey: "subtract", content: "−" },

  // ───────────── 4th row ─────────────
  { dataKey: "exp", content: "eˣ" },
  { dataKey: "square", content: "x²" },
  { dataKey: "power", content: "xʸ" },
  { dataKey: "1", content: "1" },
  { dataKey: "2", content: "2" },
  { dataKey: "3", content: "3" },
  { dataKey: "add", content: "+" },

  // ───────────── 5th row ─────────────
  { dataKey: "abs", content: "|x|" },
  { dataKey: "pi", content: "π" },
  { dataKey: "e", content: "e" },
  { dataKey: "sign", content: "±" },
  { dataKey: "0", content: "0" },
  { dataKey: "dot", content: "." },
  { dataKey: "equals", content: "=" },
];
