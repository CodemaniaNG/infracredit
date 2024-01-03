import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import Ifracoloredlogo from "@/component/Svgs/ifracoloredlogo";

const OtherLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.otherLayout}>
      <div className={styles.otherHead}>
        <Ifracoloredlogo />
      </div>
      <div className={styles.otherBody}>
        {children}
        <div className={styles.otherFooter}>
          <p>
            <b>Infrastructure Credit Guarantee Company Limited RC 1368639</b> 1
            Adeyemo Alakija Street, Victoria Island, Lagos Chairman: Uche Orji,
            Chief Executive Officer: Chinua Azubike, Directors: Chris Vermont,
            Stella Ojekwe-Onyejeli, Banji Fehintola, Sanjeev Gupta, Gilles Vaes,
            Claire Jarratt, Vivien Shobo, Hamda Ambah.
          </p>
          <h5>www.infracredit.ng</h5>
          <p>info@infracredit.ng</p>
          <p>Tel +234 (01) 631 2300- 29</p>
        </div>
      </div>
    </div>
  )
};

export default OtherLayout;
