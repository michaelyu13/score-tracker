import { ArrowCircleDown } from '@mui/icons-material';

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
        <Box component="section" height={{ sm: 550 }} mb={2} p={2} sx={{ border: 1, borderRadius: 4 }}>
            <Typography variant="h5" component="h2" mb={2} color="primary.main">
                Previous Scores
            </Typography>

            {(() => {
                if (scoresHistory.length) {
                    return (
                        <>
                            <TableContainer component={Paper} sx={{ maxHeight: { sm: 427 } }}>
                                <Table aria-label="previous scores">
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

                            {(() => {
                                if (scoresHistory.length > 7) {
                                    return (
                                        <Box
                                            mt={1.5}
                                            display={{ xs: 'none', sm: 'flex' }}
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <ArrowCircleDown fontSize="large" color="disabled" />
                                        </Box>
                                    );
                                }
                            })()}
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
    );
};

export default ScoresTable;
