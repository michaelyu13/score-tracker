import { Box, Button, Typography } from '@mui/material/';

type FooterProps = {
    setScoresHistory: React.Dispatch<React.SetStateAction<number[]>>;
};

const Footer = ({ setScoresHistory }: FooterProps) => {
    const randomSampleData: number[] = [];

    const generateRandomData = () => {
        const numberOfData = 20;
        const minValue = 100;
        const maxValue = 1000;

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
        <Box component="footer" p={4} bgcolor={'#eee'}>
            <Typography variant="h5" component="h1" align="center" mb={2} color={'#303f9f'}>
                For Testing Purposes
            </Typography>

            <Box component="section" display="flex" justifyContent="center" gap={4}>
                <Button type="submit" variant="contained" size="large" onClick={handleAddSampleReadings}>
                    Add Sample Scores
                </Button>

                <Button type="submit" variant="contained" size="large" onClick={handleDeleteAllReadings}>
                    Delete All Scores
                </Button>
            </Box>
        </Box>
    );
};

export default Footer;
