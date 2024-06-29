import { Circle } from "rc-progress";
import styles from "./style.module.scss";
const TalkTimeCard = () => {
  const color = ["#FFBA00", "#00AC47", "#CF770F", "#E94235"];
  const strokeColor = color[0];
  return (
    <main className={styles.mainContainer}>
      <section className={styles.leftSection}>
        <div className={styles.speakerLogo}>A</div>
        <div className={styles.speakerName}>Aditya Singh</div>
      </section>
      <section className={styles.rightSection}>
        <div className={styles.progressBar}>
          <Circle
            strokeWidth={15}
            strokeColor={strokeColor}
            percent={88}
            trailColor="#DEE7FB"
          />
        </div>
        <div>67%</div>
      </section>
    </main>
  );
};

export default TalkTimeCard;
