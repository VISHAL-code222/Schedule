// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Location from './pages/Location';
import Food from './pages/Food';
import ConductOfConduct from './pages/CodeOfConduct';
import Schedule from './pages/Schedule';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/food" element={<Food />} />
          <Route path="/code-of-conduct" element={<ConductOfConduct />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
