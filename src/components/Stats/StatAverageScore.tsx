import { Box, Typography } from '@mui/material/';

type ScoresGraphProps = {
    scoresHistory: number[];
};

const Stats = ({ scoresHistory }: ScoresGraphProps) => {
    const getAverageScore = (scoresHistory: number[]) => {
        const sumOfScores = scoresHistory.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const averageScore = Math.floor(sumOfScores / scoresHistory.length);

        return averageScore;
    };

    return (
        <>
            <Box component="section" p={2} sx={{ border: 1, borderRadius: 4 }}>
                <Typography variant="h5" component="h2" mb={2} color="primary.main">
                    Average Score
                </Typography>
                <Typography variant="h2" component="p" mb={2} color="primary.main">
                    {scoresHistory.length ? getAverageScore(scoresHistory) : '-'}
                </Typography>
            </Box>
        </>
    );
};

export default Stats;
