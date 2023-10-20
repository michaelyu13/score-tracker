import { useState } from 'react';

import AddScoreForm from './components/AddScoreForm';
import ScoresGraph from './components/ScoresGraph';
import ScoresTable from './components/ScoresTable';

import { Box, Container, CssBaseline, Typography } from '@mui/material/';
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
                    <Box component="header" my={4}>
                        <Typography variant="h2" component="h1" align="center">
                            Score Tracker
                        </Typography>
                    </Box>

                    <Box component="main">
                        <AddScoreForm scoresHistory={scoresHistory} setScoresHistory={setScoresHistory} />
                        <ScoresTable scoresHistory={scoresHistory} />
                        <ScoresGraph scoresHistory={scoresHistory} />
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default App;
