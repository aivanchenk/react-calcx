import styles from "./styles.module.scss";

type ValueState = [string, React.Dispatch<React.SetStateAction<string>>];

interface DisplayProps {
  valueState: ValueState;
}

export default function Display({ valueState }: DisplayProps) {
  const [raw] = valueState;

  const pretty = raw.replace(/([+\-*/×÷^()])/g, "$1\u200B");

  return (
    <div className={styles.display}>
      <div className={styles.value}>{pretty}</div>
    </div>
  );
}
