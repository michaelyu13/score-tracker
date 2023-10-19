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
    scores: number[];
};

const ScoresTable = ({ scores }: ScoresTableProps) => {
    return (
        <Box component="section" width="600px" m="auto" mb={8}>
            <Typography variant="h3" component="h2" align="center" mb={4}>
                Previous Scores
            </Typography>

            {(() => {
                if (scores.length) {
                    return (
                        <TableContainer component={Paper}>
                            <Table aria-label="score table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Score</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {scores.map((score) => (
                                        <TableRow
                                            key={score}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell scope="row">{score}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    );
                } else {
                    return <p align="center">No scores</p>;
                }
            })()}
        </Box>
    );
};

export default ScoresTable;
