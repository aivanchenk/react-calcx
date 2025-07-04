import styles from "./styles.module.scss";

type Tip = {
  header: string;
  description: string;
};

const list: Tip[] = [
  {
    header: "Tips – 1",
    description:
      "Press T to swap instantly between calming dark or bright light themes.",
  },
  {
    header: "Tips – 2",
    description:
      "Tap the mic, speak normally—your spoken numbers are transcribed and solved instantly.",
  },
  {
    header: "Tips – 3",
    description:
      "Open History, click any line to copy its result straight into the input.",
  },
];

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
