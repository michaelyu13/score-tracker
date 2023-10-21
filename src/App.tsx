import { useState } from 'react';

import AddScoreForm from './components/AddScoreForm';
import Footer from './components/Footer';
import Header from './components/Header';
import ScoresGraph from './components/ScoresGraph';
import ScoresTable from './components/ScoresTable';

import { Box, Container, CssBaseline } from '@mui/material/';
import { indigo } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

const theme = createTheme({
    palette: {
        primary: {
            main: indigo[700],
        },
    },
});

const App: React.FC = () => {
    const [scoresHistory, setScoresHistory] = useState<number[]>([]);

    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Box component="section" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Container sx={{ flexGrow: 1, marginBottom: 4 }}>
                        <Header />

                        <Box component="main" display="flex" gap={4}>
                            <Box component="section" flexGrow={1}>
                                <AddScoreForm scoresHistory={scoresHistory} setScoresHistory={setScoresHistory} />
                                <ScoresGraph scoresHistory={scoresHistory} />
                            </Box>
                            <Box component="section">
                                <ScoresTable scoresHistory={scoresHistory} />
                            </Box>
                        </Box>
                    </Container>
                    <Footer setScoresHistory={setScoresHistory} />
                </Box>
            </ThemeProvider>
        </>
    );
};

export default App;
