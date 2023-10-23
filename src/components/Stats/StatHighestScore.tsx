import { Box, Typography } from '@mui/material/';
import { grey } from '@mui/material/colors';

type ScoresGraphProps = {
    scoresHistory: number[];
};

const Stats = ({ scoresHistory }: ScoresGraphProps) => {
    return (
        <Box component="section" p={2} height="100%" bgcolor="success.light" sx={{ border: 1, borderColor: grey[300] }}>
            <Typography variant="h5" component="h2" mb={2} color="common.white">
                Highest Score
            </Typography>
            <Typography variant="h2" component="p" color="common.white">
                {scoresHistory.length > 0 ? Math.max(...scoresHistory) : '-'}
            </Typography>
        </Box>
    );
};

export default Stats;
