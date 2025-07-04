import type { buttonProps } from "../Button/Button";

type Key = Pick<buttonProps, "dataKey" | "content">;

export const buttonList: Key[] = [
  { dataKey: "back", content: "+" },
  { dataKey: "rad", content: "+" },
  { dataKey: "sqrt", content: "+" },
  { dataKey: "clear", content: "+" },
  { dataKey: "paren", content: "+" },
  { dataKey: "percent", content: "+" },
  { dataKey: "divide", content: "+" },

  { dataKey: "sin", content: "+" },
  { dataKey: "cos", content: "+" },
  { dataKey: "tan", content: "+" },
  { dataKey: "7", content: "+" },
  { dataKey: "8", content: "+" },
  { dataKey: "9", content: "+" },
  { dataKey: "multiply", content: "+" },

  { dataKey: "ln", content: "+" },
  { dataKey: "log", content: "+" },
  { dataKey: "recip", content: "+" }, // 1/x
  { dataKey: "4", content: "+" },
  { dataKey: "5", content: "+" },
  { dataKey: "6", content: "+" },
  { dataKey: "subtract", content: "+" },

  { dataKey: "exp", content: "+" }, // eˣ
  { dataKey: "square", content: "+" }, // x²
  { dataKey: "power", content: "+" }, // xʸ
  { dataKey: "1", content: "+" },
  { dataKey: "2", content: "+" },
  { dataKey: "3", content: "+" },
  { dataKey: "add", content: "+" },

  { dataKey: "abs", content: "+" }, // |x|
  { dataKey: "pi", content: "+" },
  { dataKey: "e", content: "+" },
  { dataKey: "sign", content: "+" }, // +/-
  { dataKey: "0", content: "+" },
  { dataKey: "dot", content: "+" },
  { dataKey: "equals", content: "+" },
];
