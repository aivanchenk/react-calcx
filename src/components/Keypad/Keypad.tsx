import Button from "../Button/Button";
import { buttonList } from "./data";

import styles from "./styles.module.scss";

export default function Keypad() {
  return (
    <div className={styles.keypad}>
      <div className={styles.controls}>
        <Button dataKey="history" content={"+"}></Button>
        <div className={styles.position}>
          <Button dataKey="pervious" content={"+"}></Button>
          <Button dataKey="next" content={"+"}></Button>
          <Button dataKey="backspace" content={"+"}></Button>
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
