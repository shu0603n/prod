import * as React from "react";
import styles from "./style.module.css";

type Props = {
  name: string;
  url: string;
};
const HeaderItemComponent: React.FC<Props> = ({ name, url }) => {
  return (
    <div className={styles.main}>
      {name} {url}
    </div>
  );
};

export default HeaderItemComponent;
