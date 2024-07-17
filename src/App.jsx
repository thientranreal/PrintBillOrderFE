import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataRequest } from './actions';
function App() {
  const dispatch = useDispatch();
  const dataState = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <div>
      {dataState.loading && <p>Loading...</p>}
      {dataState.error && <p>Error: {dataState.error}</p>}
      {dataState.data && dataState.data.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
    //   <Router>
    //     <Routes>
    //       <Route path="/login" element={<LoginPage />} />
    //     </Routes>
    //   </Router>
  );

}

export default App;
