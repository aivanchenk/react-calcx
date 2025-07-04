import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export interface buttonProps {
  dataKey: string;
  content: string | ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
}

export default function Button({
  dataKey,
  content,
  onClick,
  primary,
}: buttonProps) {
  return (
    <button
      data-key={dataKey}
      onClick={onClick}
      className={`${styles.button} ${primary ? styles.primary : null}`}
    >
      {content}
    </button>
  );
}
