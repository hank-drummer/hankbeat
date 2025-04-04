import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Performances from './components/Performances';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import About from './components/About';
import ArtExam from './components/ArtExam';
import ImageGallery from './components/ImageGallery';
import StudentGallery from './components/StudentGallery';
import PersonalGallery from './components/PersonalGallery';
import OutstandingStudentsSection from './components/OutstandingStudentsSection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/performances" element={<Performances />} />
            <Route path="/teaching" element={
              <>
                <Teaching />
                <OutstandingStudentsSection />
                <StudentGallery />
              </>} />
            <Route path="/about" element={<About />} />
            <Route path="/artexam" element={<ArtExam />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;