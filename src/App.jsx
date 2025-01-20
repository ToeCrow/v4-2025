import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ShowStartPage from './Pages/ShowStartPage/ShowStartPage';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
      <Routes>
        <Route path="/" element={<ShowStartPage />} />
        {/* <Route path="/task3" element={<Task3 />} /> */}
      </Routes>
      </main>
    </Router>
  );
};

export default App;