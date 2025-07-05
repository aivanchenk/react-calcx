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
        <Button
          dataKey="history"
          content="H"
          onClick={() => handleClick("history")}
        ></Button>
        <div className={styles.position}>
          <Button
            dataKey="pervious"
            content="←"
            onClick={() => handleClick("pervious")}
          ></Button>
          <Button
            dataKey="next"
            content="→"
            onClick={() => handleClick("next")}
          ></Button>
          <Button
            dataKey="back"
            content={"⌫"}
            onClick={() => handleClick("back")}
          ></Button>
        </div>
      </div>
      <div className={styles.grid}>
        {buttonList.map(({ dataKey, content, primary }) => (
          <Button
            dataKey={dataKey}
            content={content}
            onClick={() => handleClick(dataKey)}
            primary={primary}
            key={dataKey}
          ></Button>
        ))}
      </div>
    </div>
  );
}
