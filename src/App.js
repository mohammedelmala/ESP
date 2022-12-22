import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
