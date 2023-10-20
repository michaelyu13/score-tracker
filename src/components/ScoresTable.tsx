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
        <Box component="section" mb={8} p={4} sx={{ border: 1, borderRadius: '16px' }}>
            <Typography variant="h4" component="h2" mb={4} color={'#303f9f'}>
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
                                    {scoresHistory.map((score, index) => (
                                        <TableRow
                                            key={score}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell scope="row">{index + 1}</TableCell>
                                            <TableCell scope="row">{score}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    );
                } else {
                    return (
                        <Typography variant="h5" component="p" mb={4}>
                            No Scores
                        </Typography>
                    );
                }
            })()}
        </Box>
    );
};

export default ScoresTable;
