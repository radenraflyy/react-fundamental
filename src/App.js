// Parent Component
import React from 'react';
import Albums from './components/Albums/main.albums';
import MainLayout from './components/Layouts/MainLayout';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

const App = () => {
  return (
    <>
      <MainLayout>
        <Router>
          <Routes>
            <Route path="/" element={<h1>HomePage</h1>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<h1>Posting</h1>} />
            <Route path="*" element={<h1 className='text-center text-danger'>Not Found</h1>} />
          </Routes>
        </Router>
        {/* <Albums
          title={"iMAGE API"}
          description={"We fetch random image API from third party."}
        /> */}
      </MainLayout>
    </>
  )
}

export default App;
