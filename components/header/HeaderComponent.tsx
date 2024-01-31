import * as React from "react";
import styles from "./style.module.css";
import HeaderItemComponent from "./headerItem/HeaderItemComponent";
import HeaderTopComponent from "./headerTop/HeaderTopComponent";
import HeaderLogoComponent from "./headerLogo/HeaderLogoComponent";

type Props = {};
const HeaderComponent: React.FC<Props> = () => {
  const tabItems = [
    { name: "aaa", url: "aaaa" },
    { name: "bbb", url: "bbbb" },
    { name: "ccc", url: "cccc" },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.navigation}>
        <HeaderLogoComponent />
        <div className={styles.headerItems}>
          {tabItems.map((item, i) => {
            return (
              <HeaderItemComponent name={item.name} url={item.url} key={i} />
            );
          })}
        </div>
      </div>
      <HeaderTopComponent />
    </div>
  );
};

export default HeaderComponent;
