import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material/';
import { SelectChangeEvent } from '@mui/material/Select';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Unavailable from './Unavailable';

Chart.register(CategoryScale);

type ChartSectionProps = {
    scoresHistory: number[];
};

const ChartSection = ({ scoresHistory }: ChartSectionProps) => {
    const theme = useTheme();

    const [chartType, setChartType] = React.useState('bar');

    const handleOnChange = (e: SelectChangeEvent) => {
        return setChartType(e.target.value);
    };

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
                height={{ sm: 454 }}
                p={2}
                bgcolor="common.white"
                sx={{ border: 1, borderColor: grey[300] }}
            >
                {scoresHistory.length > 0 && (
                    <FormControl size="small" sx={{ float: 'right', minWidth: 100 }}>
                        <InputLabel id="chartType">Chart Type</InputLabel>
                        <Select
                            labelId="chartType"
                            id="chartTypeId"
                            value={chartType}
                            label="chartType"
                            onChange={handleOnChange}
                        >
                            <MenuItem value="bar">Bar</MenuItem>
                            <MenuItem value="line">Line</MenuItem>
                        </Select>
                    </FormControl>
                )}

                {scoresHistory.length > 0 ? (
                    <Box height="390px" sx={{ clear: 'both' }}>
                        {chartType === 'bar' ? (
                            <Bar data={chartData} options={chartOptions} />
                        ) : (
                            <Line data={chartData} options={chartOptions} />
                        )}
                    </Box>
                ) : (
                    <Unavailable />
                )}
            </Box>
        </>
    );
};

export default ChartSection;
