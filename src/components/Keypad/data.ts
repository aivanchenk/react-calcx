import type { ButtonProps } from '../Button/Button';

type Key = Omit<ButtonProps, 'onClick'>;

export const BUTTON_LIST: Key[] = [
  // ───────────── 1st row ─────────────
  { dataKey: '⇦⇨', children: '⇦⇨', className: 'scientific' },
  { dataKey: 'RAD', children: 'RAD', className: 'scientific' },
  { dataKey: '√', children: '√', className: 'scientific' },
  { dataKey: 'C', children: 'C', className: 'primaryRed' },
  { dataKey: '(', children: '(' },
  { dataKey: '%', children: '%' },
  { dataKey: '÷', children: '÷' },

  // ───────────── 2nd row ─────────────
  { dataKey: 'sin', children: 'sin', className: 'scientific' },
  { dataKey: 'cos', children: 'cos', className: 'scientific' },
  { dataKey: 'tan', children: 'tan', className: 'scientific' },
  { dataKey: '7', children: '7' },
  { dataKey: '8', children: '8' },
  { dataKey: '9', children: '9' },
  { dataKey: '×', children: '×' },

  // ───────────── 3rd row ─────────────
  { dataKey: 'ln', children: 'ln', className: 'scientific' },
  { dataKey: 'log', children: 'log', className: 'scientific' },
  { dataKey: '1/x', children: '1/x', className: 'scientific' },
  { dataKey: '4', children: '4' },
  { dataKey: '5', children: '5' },
  { dataKey: '6', children: '6' },
  { dataKey: '−', children: '−' },

  // ───────────── 4th row ─────────────
  { dataKey: 'eˣ', children: 'eˣ', className: 'scientific' },
  { dataKey: 'x²', children: 'x²', className: 'scientific' },
  { dataKey: 'xʸ', children: 'xʸ', className: 'scientific' },
  { dataKey: '1', children: '1' },
  { dataKey: '2', children: '2' },
  { dataKey: '3', children: '3' },
  { dataKey: '+', children: '+' },

  // ───────────── 5th row ─────────────
  { dataKey: '|x|', children: '|x|', className: 'scientific' },
  { dataKey: 'π', children: 'π', className: 'scientific' },
  { dataKey: 'e', children: 'e', className: 'scientific' },
  { dataKey: '±', children: '±' },
  { dataKey: '0', children: '0' },
  { dataKey: '.', children: '.' },
  { dataKey: '=', children: '=', className: 'primaryBlue' },
];
