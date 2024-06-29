import Header from "@/components/Header";
import LeftSideBar from "@/components/Meeting/LeftSideBar";
import MiddleBar from "@/components/Meeting/MiddleBar";
import RightSide from "@/components/Meeting/RightSide";

const MeetingPage = () => {
  return (
    <main>
      <Header />
      <LeftSideBar />
      <RightSide />
      <MiddleBar />
    </main>
  );
};

export default MeetingPage;
