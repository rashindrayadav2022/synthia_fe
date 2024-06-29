import styles from "./style.module.scss";

const SentimentCard = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.dot}></div>
      <div className={styles.sentimentMode}>Positive</div>
    </main>
  );
};

export default SentimentCard;
