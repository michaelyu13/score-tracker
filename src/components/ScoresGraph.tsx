import { Line } from 'react-chartjs-2';

import { Box, Typography } from '@mui/material/';

type ScoresGraphProps = {
    scoresHistory: number[];
};

const ScoresGraph = ({ scoresHistory }: ScoresGraphProps) => {
    const chartData = {
        labels: scoresHistory.map((_, index) => index),
        datasets: [
            {
                label: 'Scores ',
                data: scoresHistory.map((scoreHistory) => scoreHistory),
                backgroundColor: 'red',
                borderColor: '#303f9f',
                borderWidth: 2,
            },
        ],
    };
    return (
        <>
            <Box component="section" mb={8} p={4} sx={{ border: 1, borderRadius: '16px' }}>
                <Typography variant="h4" component="h2" mb={4} color={'#303f9f'}>
                    Scores History
                </Typography>

                {(() => {
                    if (scoresHistory.length) {
                        return (
                            <Line
                                data={chartData}
                                options={{
                                    plugins: {
                                        title: {
                                            display: false,
                                            text: 'Scores Over Attempts',
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
                            <Typography variant="h5" component="p" mb={4}>
                                No Scores History
                            </Typography>
                        );
                    }
                })()}
            </Box>
        </>
    );
};

export default ScoresGraph;
