import Button from '../Button/Button';
import { BUTTON_LIST } from './data';
import styles from './styles.module.scss';

interface KeyProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Keypad({ setValue }: KeyProps) {
  const handleClick = (digit: string) => setValue((prev) => prev + digit);

  return (
    <div className={styles.keypad}>
      <div className={styles.controls}>
        <Button dataKey="history" children="H" onClick={() => handleClick('history')}></Button>
        <div className={styles.position}>
          <Button dataKey="pervious" children="←" onClick={() => handleClick('pervious')}></Button>
          <Button dataKey="next" children="→" onClick={() => handleClick('next')}></Button>
          <Button dataKey="back" children={'⌫'} onClick={() => handleClick('back')}></Button>
        </div>
      </div>
      <div className={styles.grid}>
        {BUTTON_LIST.map(({ dataKey, children, className }) => (
          <Button
            dataKey={dataKey}
            children={children}
            onClick={() => handleClick(dataKey)}
            className={className}
            key={dataKey}
          ></Button>
        ))}
      </div>
    </div>
  );
}
