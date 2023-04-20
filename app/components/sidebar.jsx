import { sidebarData } from "@/public/sidebarData";
import Link from "next/link";
import styles from "../styles/sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          {sidebarData.map((value, key) => {
            return (
              <li className={styles.list_items} key={key}>
                <a className={styles.link} href={`#${value.link}`}>
                  {value.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className={styles.cta}>
          <Link className={styles.btn} href="/apply">
            Aplicar
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
