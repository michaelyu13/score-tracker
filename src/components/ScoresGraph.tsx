import { Line } from 'react-chartjs-2';

import { Typography } from '@mui/material/';

type ScoresGraphProps = {
    scoresHistory: number[];
};

const ScoresGraph = ({ scoresHistory }: ScoresGraphProps) => {
    const scoresHistoryIndexes = scoresHistory.map((_, index) => index);

    const chartData = {
        labels: scoresHistoryIndexes,
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
        <div className="chart-container">
            <Typography variant="h3" component="h2" align="center" mb={4}>
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
                        <Typography component="p" align="center" mb={4}>
                            No Scores History
                        </Typography>
                    );
                }
            })()}
        </div>
    );
};

export default ScoresGraph;
