import styles from "./style.module.scss";
import TimeIcon from "@/assets/png/carbon_time@2x.png";
import PeopleIcon from "@/assets/png/personicon.png";
import GoogleMeet from "@/assets/png/googlemeet.png";

const RecentMeetingCard = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.upperSection}>
        <div className={styles.timeSection}>
          <div className={styles.TimeIcon}>
            <img src={TimeIcon.src} alt="People Icon" />
          </div>
          <p>11:00 am - 12:00 pm</p>
        </div>
      </section>

      <section className={styles.middleSection}>Daily Stand Up</section>

      <section className={styles.lowerSection}>
        <div className={styles.peopleContainer}>
          <div className={styles.peopleIcon}>
            <img src={PeopleIcon.src} alt="People Icon" />
          </div>
          <p>4 People</p>
        </div>

        <div className={styles.meetContainer}>
          <div className={styles.meet}>
            <img src={GoogleMeet.src} alt="Meet Icon" />
          </div>
          <p>Join Meeting</p>
        </div>
      </section>
    </main>
  );
};

export default RecentMeetingCard;
