import Button from "../Button/Button";
import { buttonList } from "./data";

import styles from "./styles.module.scss";

type ValueState = [string, React.Dispatch<React.SetStateAction<string>>];

interface KeyProps {
  valueState: ValueState;
}

export default function Keypad({ valueState }: KeyProps) {
  const [value, setValue] = valueState;

  const handleClick = (digit: string) => setValue((prev) => prev + digit);

  return (
    <div className={styles.keypad}>
      <div className={styles.controls}>
        <Button dataKey="history" content="H"></Button>
        <div className={styles.position}>
          <Button dataKey="pervious" content="←"></Button>
          <Button dataKey="next" content="→"></Button>
          <Button dataKey="back" content={"⌫"}></Button>
        </div>
      </div>
      <div className={styles.grid}>
        {buttonList.map(({ dataKey, content }) => (
          <Button dataKey={dataKey} content={content}></Button>
        ))}
      </div>
    </div>
  );
}
