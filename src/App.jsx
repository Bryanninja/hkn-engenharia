import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      {/* Isso garante que ao mudar de página, o scroll volte pro topo */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;
