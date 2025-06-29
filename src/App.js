import "./App.css";
import Navbar from "pages/Navbar";
import Sidebar from "pages/Sidebar";

function App() {
  return (
    <div className="page-layout">
      <Navbar />
      <div className="div-flex-row sub-page-layout">
        <Sidebar />
        <div className="main-content">Main content goes here</div>
      </div>
    </div>
  );
}
export default App;
