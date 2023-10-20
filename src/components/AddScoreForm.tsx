import React, { useEffect } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material/';

type AddScoreFormProps = {
    scoresHistory: number[];
    setScoresHistory: React.Dispatch<React.SetStateAction<number[]>>;
};

const AddScoreForm = ({ scoresHistory, setScoresHistory }: AddScoreFormProps) => {
    // Regex pattern to check if the input only contains numbers
    const regexPattern = /^[0-9]+$/;

    const [newScore, setNewScore] = React.useState<string>('');
    const [helperText, setHelperText] = React.useState<string>('');
    const [isAddButtonDisabled, setIsAddButtonDisabled] = React.useState<boolean>(false);
    const [formHasErrors, setFormHasErrors] = React.useState<boolean>(false);

    useEffect(() => {
        doFormValidation(newScore);
    }, [newScore]);

    const doFormValidation = (newScore: string) => {
        if (!newScore.length) {
            setIsAddButtonDisabled(true);
            setFormHasErrors(false);
            setHelperText('');
            return;
        }

        if (newScore && newScore.charAt(0) === '0') {
            setIsAddButtonDisabled(true);
            setFormHasErrors(true);
            setHelperText('Number cannot begin with 0.');
            return;
        }

        if (newScore && !regexPattern.test(newScore)) {
            setIsAddButtonDisabled(true);
            setFormHasErrors(true);
            setHelperText('Must be a number.');
            return;
        }

        setIsAddButtonDisabled(false);
        setFormHasErrors(false);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setNewScore(e.target.value);
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setScoresHistory([...scoresHistory, parseInt(newScore)]);

        setNewScore('');
    };

    return (
        <>
            <Box component="section" mb={8} p={4} sx={{ border: 1, borderRadius: '16px' }}>
                <Typography variant="h4" component="h2" mb={4} color={'#303f9f'}>
                    Add Score
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleOnSubmit}
                    display="flex"
                    justifyContent="center"
                    alignItems="baseline"
                    gap={4}
                    mb={8}
                >
                    <TextField
                        required
                        autoComplete="off"
                        id="newScore"
                        label="New Score"
                        value={newScore}
                        error={formHasErrors}
                        helperText={helperText}
                        onChange={handleOnChange}
                        variant="outlined"
                    />

                    <Button type="submit" variant="contained" size="large" disabled={isAddButtonDisabled}>
                        Add Score
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default AddScoreForm;
