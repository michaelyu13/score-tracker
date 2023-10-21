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

type ScoresTableProps = {
    scoresHistory: number[];
};

const ScoresTable = ({ scoresHistory }: ScoresTableProps) => {
    return (
        <Box component="section" mb={2} p={2} height={662} sx={{ border: 1, borderRadius: '16px', overflow: 'auto' }}>
            <Typography variant="h4" component="h2" mb={2} color={'#303f9f'}>
                Previous Scores
            </Typography>

            {(() => {
                if (scoresHistory.length) {
                    return (
                        <TableContainer component={Paper}>
                            <Table aria-label="score table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Attempt</TableCell>
                                        <TableCell>Score</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {scoresHistory
                                        .slice()
                                        .reverse()
                                        .map((score, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell scope="row">{scoresHistory.length - index}</TableCell>
                                                <TableCell scope="row">{score}</TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    );
                } else {
                    return (
                        <Typography variant="h6" component="p" mb={2}>
                            No Scores Currently.
                        </Typography>
                    );
                }
            })()}
        </Box>
    );
};

export default ScoresTable;
