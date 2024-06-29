import styles from "./style.module.scss";
import peopleIcon from "@/assets/png/personicon.png";
import CalendarIcon from "@/assets/png/calendar2x.png";
import TimeIcon from "@/assets/png/carbon_time@2x.png";
import { monthNames, convertTimestampToTime } from "@/utils";

interface IMeetingCard {
  meetingId: string;

  title: string;

  participants: string[];

  meetingAttendees: string[];

  startTime: string;

  endTime: string;

  transcript: string;

  duration: number;

  organizerEmail: string;
  hostEmail: string;

  dateString: string;

  chatId: string;
}

interface meetingCardProps {
  meetingInfo: IMeetingCard;
}

const MeetingCard = (props: meetingCardProps) => {
  const { startTime, duration, participants, title, dateString } =
    props.meetingInfo;
  const date = new Date(dateString);

  return (
    <main className={styles.mainContainer}>
      <section className={styles.leftSection}>
        <div className={styles.meeting}>
          <div className={styles.meetingIcon}>R</div>

          <div className={styles.meetingInfo}>
            <p>{title}</p>
            <div className={styles.peopleContainer}>
              <div className={styles.peopleIcon}>
                <img src={peopleIcon.src} alt="People Icon" />
              </div>
              <p>{participants.length} People</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rightSection}>
        <div className={styles.innerRightSection}>
          <div className={styles.calendarSection}>
            <div className={styles.CalendarIcon}>
              <img src={CalendarIcon.src} alt="People Icon" />
            </div>
            <p>
              {date.getFullYear()}, {monthNames[date.getDay()]} {date.getDate()}
            </p>
          </div>
          <div className={styles.timeSection}>
            <div className={styles.TimeIcon}>
              <img src={TimeIcon.src} alt="People Icon" />
            </div>
            <p>{convertTimestampToTime(date.getTime())}</p>
          </div>
          <p>{duration} mins</p>
        </div>
      </section>
    </main>
  );
};

export default MeetingCard;
