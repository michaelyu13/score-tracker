import { useState } from 'react';

import AddScoreForm from './components/AddScoreForm';
import Footer from './components/Footer';
import Header from './components/Header';
import ScoresGraph from './components/ScoresGraph';
import ScoresTable from './components/ScoresTable';

import { Box, Container } from '@mui/material/';
import { indigo } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
                            <Box
                                component="section"
                                display="flex"
                                flexDirection="column"
                                flexGrow={1}
                                gap={{ xs: 2, sm: 4 }}
                            >
                                <AddScoreForm scoresHistory={scoresHistory} setScoresHistory={setScoresHistory} />
                                <ScoresGraph scoresHistory={scoresHistory} />
                            </Box>

                            <Box component="section">
                                <ScoresTable scoresHistory={scoresHistory} />
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
