import CalcCard from './pages/CalcCard/CalcCard';
import styles from './styles.module.scss';
import './styles/index.scss';

function App() {
  return (
    <>
      <div className={styles.pageBackground}>
        <div className={styles.pageForeground}>
          <CalcCard />
        </div>
      </div>
    </>
  );
}

export default App;
