import type { ReactNode } from 'react';

import clsx from 'classnames';

import styles from './styles.module.scss';

export interface ButtonProps {
  dataKey: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({ dataKey, children, onClick, className }: ButtonProps) {
  return (
    <button data-key={dataKey} onClick={onClick} className={clsx(styles.button, className && styles[className])}>
      {children}
    </button>
  );
}
