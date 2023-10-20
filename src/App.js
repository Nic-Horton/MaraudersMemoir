import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Spells from './pages/Spells';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/characters" element={<Characters />}></Route>
				<Route path="/spells" element={<Spells />}></Route>
			</Routes>
		</div>
	);
}

export default App;
