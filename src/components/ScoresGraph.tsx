import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

import { Box, Typography } from '@mui/material/';
import { useTheme } from '@mui/material/styles';

Chart.register(CategoryScale);

type ScoresGraphProps = {
    scoresHistory: number[];
};

const ScoresGraph = ({ scoresHistory }: ScoresGraphProps) => {
    const theme = useTheme();

    return (
        <>
            <Box component="section" height={{ sm: 380 }} p={2} sx={{ border: 1, borderRadius: 4 }}>
                <Typography variant="h5" component="h2" mb={2} color="primary.main">
                    Chart
                </Typography>

                {(() => {
                    if (scoresHistory.length) {
                        return (
                            <Box height={'300px'}>
                                <Line
                                    data={{
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
                                    }}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: {
                                            title: {
                                                display: true,
                                                text: 'Attempts',
                                                position: 'bottom',
                                                font: {
                                                    size: 14,
                                                },
                                            },
                                            legend: {
                                                display: true,
                                                position: 'top',
                                                labels: {
                                                    usePointStyle: true,
                                                    pointStyle: 'rectRot',
                                                },
                                            },
                                        },
                                    }}
                                />
                            </Box>
                        );
                    } else {
                        return (
                            <Typography variant="h6" component="p" mb={2}>
                                Unavailable at the moment.
                            </Typography>
                        );
                    }
                })()}
            </Box>
        </>
    );
};

export default ScoresGraph;
