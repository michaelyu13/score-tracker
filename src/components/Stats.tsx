import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material/';

type ScoresGraphProps = {
    scoresHistory: number[];
};

const Stats = ({ scoresHistory }: ScoresGraphProps) => {
    const highestScore = Math.max(...scoresHistory);
    const lowestScore = Math.min(...scoresHistory);

    const getAverageScore = (scoresHistory: number[]) => {
        const sumOfScores = scoresHistory.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const averageScore = Math.floor(sumOfScores / scoresHistory.length);

        return averageScore;
    };

    return (
        <>
            <Box component="section" p={2} sx={{ border: 1, borderRadius: 4 }}>
                <Typography variant="h5" component="h2" mb={2} color="primary.main">
                    Stats
                </Typography>

                {(() => {
                    if (scoresHistory.length) {
                        return (
                            <>
                                <TableContainer component={Paper} sx={{ maxHeight: { sm: 427 } }}>
                                    <Table aria-label="previous scores">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Attempts</TableCell>
                                                <TableCell>Highest Score</TableCell>
                                                <TableCell>Average Score</TableCell>
                                                <TableCell>Lowest Score</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell scope="row">{scoresHistory.length}</TableCell>
                                                <TableCell scope="row">{highestScore}</TableCell>
                                                <TableCell scope="row">{getAverageScore(scoresHistory)}</TableCell>
                                                <TableCell scope="row">{lowestScore}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </>
                        );
                    } else {
                        return (
                            <Typography variant="h6" component="p" mb={2}>
                                None for now.
                            </Typography>
                        );
                    }
                })()}
            </Box>
        </>
    );
};

export default Stats;
