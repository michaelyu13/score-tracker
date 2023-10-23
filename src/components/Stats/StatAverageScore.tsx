import { Box, Typography } from '@mui/material/';
import { grey } from '@mui/material/colors';

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
        <Box component="section" p={2} height="100%" bgcolor="warning.light" sx={{ border: 1, borderColor: grey[300] }}>
            <Typography variant="h5" component="h2" mb={2} color="common.white">
                Average Score
            </Typography>
            <Typography variant="h2" component="p" color="common.white">
                {scoresHistory.length ? getAverageScore(scoresHistory) : '-'}
            </Typography>
        </Box>
    );
};

export default Stats;
