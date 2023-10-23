import { Box, Typography } from '@mui/material/';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Unavailable from './Unavailable';

Chart.register(CategoryScale);

type ScoresGraphProps = {
    scoresHistory: number[];
};

const ScoresGraph = ({ scoresHistory }: ScoresGraphProps) => {
    const theme = useTheme();

    const chartData = {
        labels: scoresHistory.map((_, index) => index + 1),
        datasets: [
            {
                label: 'Score ',
                data: scoresHistory.map((scoreHistory) => scoreHistory),
                backgroundColor: theme.palette.primary.light,
                borderColor: theme.palette.primary.main,
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Attempts',
                position: 'bottom' as const,
                font: {
                    size: 14,
                },
            },
            legend: {
                display: true,
                position: 'top' as const,
                labels: {
                    usePointStyle: true,
                    pointStyle: 'rectRot',
                },
            },
        },
    };

    return (
        <>
            <Typography variant="h5" component="h2" mb={2} color="primary.main">
                Chart
            </Typography>

            <Box
                component="section"
                height={{ md: 480 }}
                p={2}
                bgcolor="common.white"
                sx={{ border: 1, borderColor: grey[300] }}
            >
                {(() => {
                    if (scoresHistory.length) {
                        return (
                            <Box height={'456px'}>
                                <Line data={chartData} options={chartOptions} />
                            </Box>
                        );
                    } else {
                        return <Unavailable />;
                    }
                })()}
            </Box>
        </>
    );
};

export default ScoresGraph;
