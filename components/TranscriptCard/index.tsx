import styles from "./style.module.scss";

const TranscriptCard = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.upperSection}>
        <div className={styles.speakerLogo}>A</div>
        <div className={styles.speakerName}>Aditya Singh</div>
      </section>
      <section className={styles.lowerSection}>
        <div className={styles.text}>
          Good morning everyone. So parishit update from my end is I raised a pr
          yesterday for joiners CSS fixes so it looks a lot better than the
          previous version. Here’s the link
        </div>
      </section>
    </main>
  );
};

export default TranscriptCard;
