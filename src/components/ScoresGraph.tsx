import { Line } from 'react-chartjs-2';

import { Box, Typography } from '@mui/material/';

type ScoresGraphProps = {
    scoresHistory: number[];
};

const ScoresGraph = ({ scoresHistory }: ScoresGraphProps) => {
    const chartData = {
        labels: scoresHistory.map((index) => index + 1),
        datasets: [
            {
                label: 'Score ',
                data: scoresHistory.map((scoreHistory) => scoreHistory),
                backgroundColor: 'red',
                borderColor: '#303f9f',
                borderWidth: 2,
            },
        ],
    };

    return (
        <>
            <Box component="section" mb={2} p={2} height={500} sx={{ border: 1, borderRadius: '16px' }}>
                <Typography variant="h4" component="h2" mb={2} color={'#303f9f'}>
                    Chart
                </Typography>

                {(() => {
                    if (scoresHistory.length) {
                        return (
                            <Line
                                data={chartData}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: 'Attempts',
                                            position: 'bottom',
                                            color: '#303f9f',
                                        },
                                        legend: {
                                            display: false,
                                        },
                                    },
                                }}
                            />
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
