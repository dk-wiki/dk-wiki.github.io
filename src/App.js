import './App.css';
import HomePage from './pages/Homepage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Entries from './pages/Entries';
import Navbar, { Footer } from './Global';
import Entry from './entries/Entry';
import About from './pages/About';

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <Router>
        <div className="flex flex-col flex-grow px-5">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/entries" element={<Entries />} />
              <Route path="/entries/:id" element={<Entry />} />
              <Route path="*" element={
                <>
                  <h1 className="flex justify-center items-center text-4xl mt-5 mb-7">Page not found</h1>
                  <a className="text-1xl" href="/">Return Home</a>
                </>
              } />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;