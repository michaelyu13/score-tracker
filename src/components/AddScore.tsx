import { Box, Button, TextField, Typography } from '@mui/material/';
import { grey } from '@mui/material/colors';
import React, { useEffect } from 'react';

type AddScoreProps = {
    scoresHistory: number[];
    setScoresHistory: React.Dispatch<React.SetStateAction<number[]>>;
};

const AddScore = ({ scoresHistory, setScoresHistory }: AddScoreProps) => {
    // Regex pattern to check the input:
    // - Only has numbers.
    // - Does not begin with zero.
    // - Does not have a decimal point.
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

        if (newScore.charAt(0) === '0') {
            setIsAddButtonDisabled(true);
            setFormHasErrors(true);
            setHelperText('Number cannot begin with 0.');
            return;
        }

        if (!regexPattern.test(newScore)) {
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
            <Typography variant="h5" component="h2" mb={2} color="primary.main">
                Add Score
            </Typography>

            <Box component="section" p={2} sx={{ border: 1, borderColor: grey[300] }} bgcolor="common.white">
                <Box
                    component="form"
                    onSubmit={handleOnSubmit}
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    gap={2}
                    width={{ md: '50%' }}
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
                        inputProps={{ maxLength: 3 }}
                        placeholder="3 Digits Max"
                    />

                    <Button type="submit" variant="contained" size="large" disabled={isAddButtonDisabled}>
                        Add Score
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default AddScore;
