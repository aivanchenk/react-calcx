import { useState } from 'react';

import Display from '../../components/Display/Display';
import Headline from '../../components/Headline/Headline';
import Keypad from '../../components/Keypad/Keypad';
import TipsList from '../../components/TipsList/TipsList';
import styles from './styles.module.scss';

export default function CalcCard() {
  const valueState = useState('');

  return (
    <div className={styles.calcCard}>
      <div className={styles.infoPanel}>
        <Headline />
        <TipsList />
      </div>
      <div className={styles.calcPanel}>
        <Display valueState={valueState} />
        <Keypad valueState={valueState} />
      </div>
    </div>
  );
}
