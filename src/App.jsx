import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';
// import ProtectedRoute from './auth/ProtectedRoute';

import history from './history';
function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard />
          }
        />

      </Routes>
      <ToastContainer />

    </Router>
  );

}

export default App;
