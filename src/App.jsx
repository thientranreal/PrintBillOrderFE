import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

      </Routes>
      <ToastContainer />

    </Router>
  );

}

export default App;
