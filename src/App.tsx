import { Box, Container, Grid } from '@mui/material/';
import { grey, indigo } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import AddScore from './components/AddScore';
import ChartSection from './components/ChartSection';
import Footer from './components/Footer';
import Header from './components/Header';
import PreviousScores from './components/PreviousScores';
import StatAttempts from './components/Stats/StatAttempts';
import StatAverageScore from './components/Stats/StatAverageScore';
import StatHighestScore from './components/Stats/StatHighestScore';
import StatLowestScore from './components/Stats/StatLowestScore';

const LOCAL_STORAGE_KEY = 'scoresTracker';

const theme = createTheme({
    palette: {
        primary: {
            main: indigo[700],
            light: indigo[50],
        },
    },
});

const App = () => {
    const [scoresHistory, setScoresHistory] = useState<number[]>([]);

    const sideEffectRanOnceAfterInitialRender = useRef(false);

    useEffect(() => {
        if (sideEffectRanOnceAfterInitialRender.current === false) {
            const scoresJSON = localStorage.getItem(LOCAL_STORAGE_KEY);

            if (scoresJSON != null) {
                setScoresHistory(JSON.parse(scoresJSON));
            }

            sideEffectRanOnceAfterInitialRender.current = true;
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(scoresHistory));
    }, [scoresHistory]);

    return (
        <ThemeProvider theme={theme}>
            <Box
                component="section"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    backgroundColor: grey[100],
                }}
            >
                <Container sx={{ flexGrow: 1, marginBottom: 2 }}>
                    <Header />

                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={3}>
                            <StatAttempts scoresHistory={scoresHistory} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StatLowestScore scoresHistory={scoresHistory} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StatAverageScore scoresHistory={scoresHistory} />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StatHighestScore scoresHistory={scoresHistory} />
                        </Grid>

                        <Grid item xs={12}>
                            <AddScore scoresHistory={scoresHistory} setScoresHistory={setScoresHistory} />
                        </Grid>

                        <Grid item xs={12} md={9}>
                            <ChartSection scoresHistory={scoresHistory} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <PreviousScores scoresHistory={scoresHistory} />
                        </Grid>
                    </Grid>
                </Container>

                <Footer scoresHistory={scoresHistory} setScoresHistory={setScoresHistory} />
            </Box>
        </ThemeProvider>
    );
};

export default App;
