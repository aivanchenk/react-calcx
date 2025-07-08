import styles from './styles.module.scss';

interface DisplayProps {
  value: string;
}

export default function Display({ value }: DisplayProps) {
  const ZERO_WIDTH_SPACE = '$1\u200B';
  const formattedValue = value.replace(/([+\-*/×÷^()])/g, ZERO_WIDTH_SPACE);

  return (
    <div className={styles.display}>
      <div className={styles.value}>{formattedValue}</div>
    </div>
  );
}
