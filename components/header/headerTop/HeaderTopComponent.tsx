import * as React from "react";
import styles from "./style.module.css";

type Props = {};
const HeaderTopComponent: React.FC<Props> = () => {
  return <div className={styles.main}>メインビジュアル</div>;
};

export default HeaderTopComponent;
