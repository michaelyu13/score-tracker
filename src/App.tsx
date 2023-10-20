import { useState } from 'react';

import AddScoreForm from './components/AddScoreForm';
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
                <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Header />

                    <Box component="main" display="flex" gap={12}>
                        <Box component="section" mb={8}>
                            <AddScoreForm scoresHistory={scoresHistory} setScoresHistory={setScoresHistory} />
                            <ScoresTable scoresHistory={scoresHistory} />
                        </Box>
                        <Box component="section" sx={{ flexGrow: 1 }}>
                            <ScoresGraph scoresHistory={scoresHistory} />
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default App;
