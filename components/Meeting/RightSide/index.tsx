import Calendar from "react-calendar";
import styles from "./style.module.scss";
import RecentMeetingCard from "../../RecentMeetingCard";

const RightSide = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.lowerSection}>
        <div style={{ padding: "0 20px" }}>Today</div>
        <div className={styles.recentCardList}>
          <RecentMeetingCard />
          <RecentMeetingCard />
          <RecentMeetingCard />
          <RecentMeetingCard />
          <RecentMeetingCard />
        </div>
      </section>
    </main>
  );
};

export default RightSide;
