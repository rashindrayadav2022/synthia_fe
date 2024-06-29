import styles from "./style.module.scss";
import Calendar from "@/assets/png/calendar2x.png";
import Chart from "@/assets/png/chart.png";
import Sync from "@/assets/png/sync.png";

const LeftSideBar = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.upperSection}>
        <div className={styles.syncmeeting}>
          <img src={Sync.src} alt="" />
          <div>Sync meeting</div>
        </div>
      </section>

      <section className={styles.lowerSection}>
        <div># Meetings</div>

        <div className={styles.allmeeting}>
          <img src={Chart.src} alt="" />
          <div>All Meeting</div>
        </div>

        <div className={styles.today}>
          <img src={Calendar.src} alt="Calendar" />
          <div>Today</div>
        </div>

        <div className={styles.days}>
          <img src={Calendar.src} alt="Calendar" />
          <div>7 Days</div>
        </div>
        
      </section>
    </main>
  );
};

export default LeftSideBar;
