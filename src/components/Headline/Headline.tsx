import styles from "./styles.module.scss";

export default function Headline() {
  return (
    <div>
      <h1 className={styles.headline}>Calculate Your Problem Easily.</h1>
      <p className={styles.description}>
        Meet the one-page calculator that keeps up with the way you actually
        work. Switch instantly between light and dark themes, dictate numbers by
        voice when your hands are busy, and scroll back through a clean history
        pane to verify every step. No pop-ups, no ads—just fast, focused math.
      </p>
    </div>
  );
}
