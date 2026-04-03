import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { OriginalConcept } from "./pages/OriginalConcept";
import { ThemePage } from "./pages/ThemePage";
import { avenzo } from "./config/avenzo/avenzo.config";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/original" element={<OriginalConcept />} />
        <Route path="/new-concept/*" element={<ThemePage config={avenzo} />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-4xl font-bold mb-8">Avenzo Concepts</h1>
      <div className="flex gap-6">
        <Link
          to="/original"
          className="px-8 py-4 bg-brand-green text-white rounded-xl shadow-lg hover:-translate-y-1 transition-transform font-bold"
        >
          Original Concept
        </Link>
        <Link
          to="/new-concept"
          className="px-8 py-4 bg-[#B4FF29] text-black rounded-xl shadow-lg hover:-translate-y-1 transition-transform font-bold"
        >
          New Concept (Theme System)
        </Link>
      </div>
    </div>
  );
}

export default App;
