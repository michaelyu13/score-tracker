import { Box, Typography } from '@mui/material/';

type ScoresGraphProps = {
    scoresHistory: number[];
};

const Stats = ({ scoresHistory }: ScoresGraphProps) => {
    return (
        <>
            <Box component="section" p={2} sx={{ border: 1, borderRadius: 4 }}>
                <Typography variant="h5" component="h2" mb={2} color="primary.main">
                    Highest Score
                </Typography>
                <Typography variant="h2" component="p" mb={2} color="primary.main">
                    {scoresHistory.length ? Math.max(...scoresHistory) : '-'}
                </Typography>
            </Box>
        </>
    );
};

export default Stats;
