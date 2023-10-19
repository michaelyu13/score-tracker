import { useState } from 'react';

import AddScoreForm from './components/AddScoreForm';
import ScoresTable from './components/ScoresTable';

import { Box, Container, CssBaseline, Typography } from '@mui/material/';

const App: React.FC = () => {
    const [scores, setScores] = useState<number[]>([]);

    return (
        <>
            <CssBaseline />
            <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Box component="header" my={4}>
                    <Typography variant="h2" component="h1" align="center">
                        Score Tracker
                    </Typography>
                </Box>

                <Box component="main">
                    <AddScoreForm scores={scores} setScores={setScores} />
                    <ScoresTable scores={scores} />
                </Box>
            </Container>
        </>
    );
};

export default App;
