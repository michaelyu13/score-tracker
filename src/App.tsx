import { useState } from 'react';

import AddScore from './components/AddScore';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';
import Header from './components/Header';
import PreviousScores from './components/PreviousScores';
import Stats from './components/Stats';

import { Box, Container } from '@mui/material/';
import { indigo } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: indigo[700],
            light: indigo[50],
        },
    },
});

const App: React.FC = () => {
    const [scoresHistory, setScoresHistory] = useState<number[]>([]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box component="section" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Container sx={{ flexGrow: 1, marginBottom: 2 }}>
                        <Header />

                        <Box
                            component="main"
                            display="flex"
                            flexDirection={{ xs: 'column', sm: 'row' }}
                            gap={{ xs: 2, sm: 4 }}
                        >
                            <Box display="flex" flexDirection="column" flexGrow={1} gap={{ xs: 2, sm: 4 }}>
                                <AddScore scoresHistory={scoresHistory} setScoresHistory={setScoresHistory} />
                                <Stats scoresHistory={scoresHistory} />

                                <ChartSection scoresHistory={scoresHistory} />
                            </Box>

                            <Box component="section">
                                <PreviousScores scoresHistory={scoresHistory} />
                            </Box>
                        </Box>
                    </Container>
                    <Footer scoresHistory={scoresHistory} setScoresHistory={setScoresHistory} />
                </Box>
            </ThemeProvider>
        </>
    );
};

export default App;
