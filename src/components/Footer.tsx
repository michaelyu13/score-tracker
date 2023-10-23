import { AddBox, Delete } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material/';
import { grey } from '@mui/material/colors';

type FooterProps = {
    scoresHistory: number[];
    setScoresHistory: React.Dispatch<React.SetStateAction<number[]>>;
};

const Footer = ({ scoresHistory, setScoresHistory }: FooterProps) => {
    const randomSampleData: number[] = [];

    const generateRandomData = () => {
        const numberOfData = 20;
        const minValue = 100;
        const maxValue = 999;

        for (let i = 0; i < numberOfData; i++) {
            const randomData = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            randomSampleData.push(randomData);
        }
    };

    const handleAddSampleReadings = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        generateRandomData();
        setScoresHistory(randomSampleData);
    };

    const handleDeleteAllReadings = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setScoresHistory([]);
    };
    return (
        <Box component="footer" pt={2} px={2} bgcolor={grey[300]}>
            <Typography variant="h5" component="h1" align="center" mb={2} color="primary.main">
                For Testing Purposes
            </Typography>

            <Box
                component="section"
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                justifyContent="center"
                gap={{ xs: 2, sm: 4 }}
                mb={2}
            >
                <Button
                    type="submit"
                    variant="contained"
                    startIcon={<AddBox />}
                    size="large"
                    onClick={handleAddSampleReadings}
                >
                    Add Sample Scores
                </Button>

                <Button
                    type="submit"
                    disabled={scoresHistory.length ? false : true}
                    variant="contained"
                    startIcon={<Delete />}
                    size="large"
                    onClick={handleDeleteAllReadings}
                >
                    Delete All Scores
                </Button>
            </Box>

            <Typography variant="h6" component="p" mb={2} align="center" color="primary.main">
                Note: Scores are stored in Local Storage.
            </Typography>
        </Box>
    );
};

export default Footer;
