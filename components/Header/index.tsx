import styles from "./style.module.scss";
import Notification from "@/assets/png/notification.png";

const Header = () => {
  const searchHandler = () => {
  };
  return (
    <main className={styles.mainContainer}>
      <section className={styles.leftSection}>
        <div className={styles.logoName}>S</div>
        <div className={styles.projectName}>Synthia.ai</div>
      </section>
      <section className={styles.middleSection}>
        <input
          type="text"
          placeholder="search"
          className={styles.search}
          onChange={() => searchHandler()}
        />
      </section>
      <section className={styles.notification}>
        <img src={Notification.src} alt="Notification" />
      </section>
    </main>
  );
};

export default Header;
