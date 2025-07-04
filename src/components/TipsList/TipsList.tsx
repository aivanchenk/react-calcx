import { list } from "./data";
import styles from "./styles.module.scss";

export default function TipsList() {
  return (
    <div className={styles.tips}>
      {list.map(({ header, description }) => (
        <article className="tip">
          <h2 className={styles.tipTitle}>{header}</h2>
          <p className={styles.tipDesc}>{description}</p>
        </article>
      ))}
    </div>
  );
}
