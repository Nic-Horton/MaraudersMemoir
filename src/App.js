import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetails from './components/ForPages/Characters/CharacterDetails';
import Spells from './pages/Spells';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Box } from '@mui/material';

function App() {
	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/characters" element={<Characters />}></Route>
				<Route path="/characters/:slug" element={<CharacterDetails />}></Route>
				<Route path="/spells" element={<Spells />}></Route>
			</Routes>
			<Footer />
		</Box>
	);
}

export default App;
