import { Box, Container, Grid } from '@mui/material/';
import { indigo } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import AddScore from './components/AddScore';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';
import Header from './components/Header';
import PreviousScores from './components/PreviousScores';
import StatAttempts from './components/Stats/StatAttempts';
import StatAverageScore from './components/Stats/StatAverageScore';
import StatHighestScore from './components/Stats/StatHighestScore';
import StatLowestScore from './components/Stats/StatLowestScore';

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

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <AddScore scoresHistory={scoresHistory} setScoresHistory={setScoresHistory} />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <StatAttempts scoresHistory={scoresHistory} />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <StatLowestScore scoresHistory={scoresHistory} />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <StatAverageScore scoresHistory={scoresHistory} />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <StatHighestScore scoresHistory={scoresHistory} />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <ChartSection scoresHistory={scoresHistory} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <PreviousScores scoresHistory={scoresHistory} />
                            </Grid>
                        </Grid>
                    </Container>

                    <Footer scoresHistory={scoresHistory} setScoresHistory={setScoresHistory} />
                </Box>
            </ThemeProvider>
        </>
    );
};

export default App;
