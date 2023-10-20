import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Spells from './pages/Spells';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/characters" element={<Characters />}></Route>
				<Route path="/spells" element={<Spells />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
