import ChatComponent from "./ChatComponent";
import "./styles.css";
import VScodeSidebar from "./VScodeSidebar";
import FetchOnClick from "./FetchOnClick";
import FetchData from "./FetchData";
import ToggleComponent from "./ToggleComponent";
import ChipInput from "./namasteDevQA/ChipsInput";
import Accordion from "./namasteDevQA/Accordion";
import Sidebar from "./namasteDevQA/Sidebar";

export default function App() {
  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript.",
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React.",
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js.",
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js.",
    },
  ];
  return (
    <div className="">
      {/* <VScodeSidebar /> */}
      {/* <ChatComponent /> */}
      {/* <FetchOnClick /> */}
      {/* <FetchData /> */}
      {/* <ToggleComponent /> */}
      {/* <ChipInput /> */}
      {/* <Accordion items={items} /> */}
      <Sidebar />
    </div>
  );
}
