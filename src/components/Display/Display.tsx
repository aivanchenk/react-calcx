import styles from './styles.module.scss';

type ValueState = [string, React.Dispatch<React.SetStateAction<string>>];

interface DisplayProps {
  valueState: ValueState;
}

export default function Display({ valueState }: DisplayProps) {
  const [raw] = valueState;

  const ZERO_WIDTH_SPACE = '$1\u200B';
  const pretty = raw.replace(/([+\-*/×÷^()])/g, ZERO_WIDTH_SPACE);

  return (
    <div className={styles.display}>
      <div className={styles.value}>{pretty}</div>
    </div>
  );
}
