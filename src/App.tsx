import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantPage from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantPage />} />
      </Routes>
    </Router>
  );
}

export default App;
