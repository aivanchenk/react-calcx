import styles from "./styles.module.scss";

type ValueState = [string, React.Dispatch<React.SetStateAction<string>>];

interface DisplayProps {
  valueState: ValueState;
}

export default function Display({ valueState }: DisplayProps) {
  const [value] = valueState;
  return (
    <div className={styles.display}>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
