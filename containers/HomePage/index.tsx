import { useState } from "react";
import styles from "./style.module.scss";

const HomePage = () => {
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
  const clickHandler = () => {
    console.log("click Handler");
  };
  return (
    <main className={styles.mainContainer}>
      <section className={styles.leftSection}>
        <div className={styles.innerLeftSection}>
          <div>
            Follow these steps to obtain your API key for the Fireflies API:
          </div>
          <ol>
            <li>Copy and store your API key securely</li>
            <li>Log in to your account at fireflies.ai</li>
            <li>Navigate to the Integrations section</li>
            <li>Click on Fireflies API</li>
          </ol>
        </div>
      </section>

      <section className={styles.rightSection}>
        <div className={styles.innerRightSection}>
          <div className={styles.projectName}>Synthia.ai</div>
          <div className={styles.inputInfo}>Enter Your API Key</div>
          <div className={styles.inputInfoDesccription}>
            Unlock the power of seamless meeting management! Enter your API key
            to effortlessly gather all your meeting data in one go. 🚀✨
          </div>
          <div className={styles.interactionContainer}>
            <input type="text" className={styles.inputText} />
            <button
              className={styles.submitButton}
              onClick={() => {
                clickHandler();
              }}
            >
              submit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
