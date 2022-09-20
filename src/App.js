import Navbar from "./component/Navbar";
import TodayNews from "./component/NewsComponent/TodayNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./component/NewsComponent/News";
import Footer from "./component/Footer";
import GetSearch from "./component/GetSearch";

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<TodayNews />} />
            <Route path="/News/:cate" element={<News />} />
            <Route path="/search/:name" element={<GetSearch />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
