import "./App.css";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* sidbar */}
        <Sidebar />
        {/* chat compnent*/}
        <Chat />
      </div>
    </div>
  );
}

export default App;
