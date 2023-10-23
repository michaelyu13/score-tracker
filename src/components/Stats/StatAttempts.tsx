import { Box, Typography } from '@mui/material/';
import { grey } from '@mui/material/colors';
type ScoresGraphProps = {
    scoresHistory: number[];
};

const Stats = ({ scoresHistory }: ScoresGraphProps) => {
    return (
        <Box component="section" p={2} height="100%" bgcolor="info.light" sx={{ border: 1, borderColor: grey[300] }}>
            <Typography variant="h5" component="h2" mb={2} color="common.white">
                Attempts
            </Typography>
            <Typography variant="h2" component="p" color="common.white">
                {scoresHistory.length ? scoresHistory.length : '-'}
            </Typography>
        </Box>
    );
};

export default Stats;
