import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="container">
        <Header  />
        <div className="navbar">
          <Navbar  />
        </div>
        <div className="main">
          <Main  />
        </div>
        <div className="footer">
          <Footer  />
        </div>
    </div>
  );
}

export default App;
