import type { ReactElement } from "react";
import clsx from "classnames";
import styles from "./styles.module.scss";

export interface buttonProps {
  dataKey: string;
  content: string | ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({
  dataKey,
  content,
  onClick,
  className,
}: buttonProps) {
  return (
    <button
      data-key={dataKey}
      onClick={onClick}
      className={clsx(styles.button, className && styles[className])}
    >
      {content}
    </button>
  );
}
