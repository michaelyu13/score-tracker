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
import { tableCellClasses } from '@mui/material/TableCell';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Unavailable from './Unavailable';

type ScoresTableProps = {
    scoresHistory: number[];
};

const ScoresTable = ({ scoresHistory }: ScoresTableProps) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.grey[500],
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    return (
        <>
            <Typography variant="h5" component="h2" mb={2} color="primary.main">
                Previous Scores
            </Typography>

            <Box
                component="section"
                height={{ md: 480 }}
                mb={2}
                p={2}
                bgcolor="common.white"
                sx={{ border: 1, borderColor: grey[300] }}
            >
                {(() => {
                    if (scoresHistory.length > 0) {
                        return (
                            <>
                                <TableContainer component={Paper} sx={{ maxHeight: { md: 399 } }}>
                                    <Table stickyHeader size="small" aria-label="previous scores">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Attempt</StyledTableCell>
                                                <StyledTableCell>Score</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {scoresHistory
                                                .slice()
                                                .reverse()
                                                .map((score, index) => (
                                                    <StyledTableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <StyledTableCell scope="row">
                                                            {scoresHistory.length - index}
                                                        </StyledTableCell>
                                                        <StyledTableCell scope="row">{score}</StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                {(() => {
                                    if (scoresHistory.length > 11) {
                                        return (
                                            <Box
                                                mt={2}
                                                display={{ xs: 'none', md: 'flex' }}
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
                        return <Unavailable />;
                    }
                })()}
            </Box>
        </>
    );
};

export default ScoresTable;
