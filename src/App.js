import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'
import { SearchProvider } from './contexts/SearchContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
// import './modules/styles.css';

function App() {
  const [globalSearchText, setGlobalSearchText] = useState("");

  return (
    <div className="App">
      <SearchProvider value={{globalSearchText: globalSearchText, setGlobalSearchText}}>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
        </Routes>
      </SearchProvider>

      <Footer></Footer>
    </div>
  );
}

export default App;
