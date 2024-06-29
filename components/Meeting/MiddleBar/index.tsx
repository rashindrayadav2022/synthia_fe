import MeetingCard from "@/components/MeetingCard";
import styles from "./style.module.scss";
import { useState } from "react";
const MiddleBar = () => {
  const [state, setState] = useState([
    {
      meetingId: "abc123",
      title: "Team Sync",
      participants: ["john.doe@example.com", "jane.smith@example.com"],
      meetingAttendees: [
        "john.doe@example.com",
        "jane.smith@example.com",
        "dave.brown@example.com",
      ],
      startTime: "2024-06-29T10:00:00Z",
      endTime: "2024-06-29T11:00:00Z",
      transcript: "Transcript of the meeting...",
      duration: 60,
      organizerEmail: "organizer@example.com",
      hostEmail: "host@example.com",
      dateString: "2024-06-29",
      chatId: "chat123",
      summary: {
        actionItems: "Complete project documentation",
        keywords: ["project", "documentation", "deadline"],
        outline: "Discussion about project status and next steps.",
        overview:
          "We discussed the current progress of the project and identified the next steps needed to complete it.",
        shorthandBullet: "Project documentation to be completed by next week.",
      },
    },
  ]);
  return (
    <main className={styles.mainContainer}>
      <section className={styles.lowerSection}>
        <MeetingCard meetingInfo={state[0]} />
        <MeetingCard meetingInfo={state[0]} />
        <MeetingCard meetingInfo={state[0]} />
        <MeetingCard meetingInfo={state[0]} />
        <MeetingCard meetingInfo={state[0]} />
        <MeetingCard meetingInfo={state[0]} />
        <MeetingCard meetingInfo={state[0]} />
        <MeetingCard meetingInfo={state[0]} />
      </section>
    </main>
  );
};

export default MiddleBar;
