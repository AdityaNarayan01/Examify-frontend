
import React from 'react';
import {Box,Typography,FormControlLabel, Divider, RadioGroup, Radio} from '@mui/material';


export default function AppTasks({questionindex, title, marks, mcqQuestions,  disabled, correct}) {

    const [checked, setchecked] = React.useState(-1);

    const oncheckSubmit = (event) => {
        const prevcheck = checked;
        setchecked(event.target.value);
        console.log(`Dispatch Action from here`);
        console.log(`question index : ${questionindex}`)
        console.log(`prevcheck:${prevcheck}`)
        console.log(`nowchcek: ${event.target.value}`)
    }


    return (
        <Box sx={{ px: 3, py: 1, mt: 3 }}>
            <Box sx={{pb:2, display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                <Typography className="noselect" variant="h4" noWrap>{title}</Typography>
                <Typography className="noselect" variant="h6" noWrap>marks:{marks}</Typography>
            </Box>

            <RadioGroup
                className="noselect"
                aria-labelledby="demo-radio-buttons-group-label"
                name="checked"
                value={checked}
                onChange={oncheckSubmit}
                disabled={disabled}
            >
                {mcqQuestions?.map((mcq, index) => (
                    <FormControlLabel key={index} value={index} control={<Radio />} label={mcq.mcqTitle} />
                ))}
            </RadioGroup>

            <Divider />
    </Box>
    );
}
