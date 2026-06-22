import { Routes, Route } from 'react-router-dom';
import { RequestAccessProvider } from './context/RequestAccessContext';
import RequestAccessModal from './components/RequestAccessModal';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoneForYou from './pages/DoneForYou';
import DIYContentSystem from './pages/DIYContentSystem';
import ForAgencies from './pages/ForAgencies';
import ForProfessionalServices from './pages/ForProfessionalServices';
import NotFound from './pages/NotFound';

function App() {
  return (
    <RequestAccessProvider>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/done-for-you" element={<DoneForYou />} />
            <Route path="/diy-content-system" element={<DIYContentSystem />} />
            <Route path="/for-agencies" element={<ForAgencies />} />
            <Route path="/for-professional-services" element={<ForProfessionalServices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <RequestAccessModal />
      </div>
    </RequestAccessProvider>
  );
}

export default App;
