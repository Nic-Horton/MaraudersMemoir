import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetails from './components/ForPages/Characters/CharacterDetails';
import Spells from './pages/Spells';
import SpellDetails from './components/ForPages/Spells/SpellDetails';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import QOTD from './pages/QOTD';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#e0ae83',
		},
		secondary: {
			main: '#740001',
		},
		background: {
			paper: '#370101',
		},
		text: {
			primary: '#e0ae83',
			secondary: '#900505',
		},
	},
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: '#B30202',
					},
				},
			},
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Box
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/characters" element={<Characters />}></Route>
					<Route
						path="/characters/:slug"
						element={<CharacterDetails />}
					></Route>
					<Route path="/spells" element={<Spells />}></Route>
					<Route path="/spells/:slug" element={<SpellDetails />}></Route>
					<Route path="/qotd" element={<QOTD />}></Route>
				</Routes>
				<Footer />
			</Box>
		</ThemeProvider>
	);
}

export default App;
