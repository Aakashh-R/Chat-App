
import Sidebar from "../components/Sidebar";
import ChatConatiner from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
const HomePage = () => {
  return (
    <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
      <div className="backdrop-blur-xl border-2 border-gray-600 rounded-2xl  overflow-hidden h-[100%] grid grid-cols-1 relative">
        <Sidebar />
        <ChatConatiner />
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
