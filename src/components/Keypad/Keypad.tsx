import Button from '../Button/Button';
import { buttonList } from './data';
import styles from './styles.module.scss';

type ValueState = [string, React.Dispatch<React.SetStateAction<string>>];

interface KeyProps {
  valueState: ValueState;
}

export default function Keypad({ valueState }: KeyProps) {
  const [, setValue] = valueState;

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
        {buttonList.map(({ dataKey, content, className }) => (
          <Button
            dataKey={dataKey}
            children={content}
            onClick={() => handleClick(dataKey)}
            className={className}
            key={dataKey}
          ></Button>
        ))}
      </div>
    </div>
  );
}
