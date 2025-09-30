import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import StudieMatch from "./pages/StudieMatch";
import FiestaCultura from "./pages/FiestaCultura";
import DeBib from "./pages/DeBib";
import MH370 from "./pages/MH370";
import MoodyMingle from "./pages/MoodyMingle";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/studie-match" element={<StudieMatch />} />
				<Route path="/fiesta-cultura" element={<FiestaCultura />} />
				<Route path="/de-bib" element={<DeBib />} />
				<Route path="/mh370" element={<MH370 />} />
				<Route path="/moody-mingle" element={<MoodyMingle />} />
			</Routes>
		</Router>
	);
}

export default App;
