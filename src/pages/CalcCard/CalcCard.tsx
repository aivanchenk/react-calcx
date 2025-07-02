import React from "react";
import Headline from "../../components/Headline/Headline";
import TipsList from "../../components/TipsList/TipsList";

import styles from "./styles.module.scss";

export default function CalcCard () {
    return (
        <div className={styles.pageBackground}>
            <div className={styles.pageForeground}>
                <Headline/>
                <TipsList/>
            </div>
        </div>
    );
}