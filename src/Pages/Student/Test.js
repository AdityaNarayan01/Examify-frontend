
import React from 'react';
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import Page from '../../components/Page';
import { AppTasks, SingleCheck } from '../../components/student/main';


export default function DashboardApp() {
    const arr = Array.from(Array(10).keys());
    const [title, settitle] = React.useState('Compiler Design CT1');
    const [timeRemaining, settimeRemaining] = React.useState(240);

    const second = () => (new Date()).getUTCSeconds() % timeRemaining;
    const [time, setTime] = React.useState(second);
    

    React.useEffect(() => {
        const timer = setInterval(() =>{
            const nxttime = second();
            setTime((prevTime) => {
                if (prevTime > nxttime) {
                    console.log('navigate');
                }
                return nxttime;
            });
        }, 1000)
        
        return (() => {
            clearInterval(timer);
        })
    }, [])

return (
    <Page title={`Test | ${title}`}>

        <Container maxWidth="xl" sx={{pb: 15}}>
            <Box sx={{ pt: 15, pb: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Box>
                <Typography className="noselect" variant="h4">{title}</Typography>
                <Typography className="noselect" variant="h4">Marks Obtained: 15</Typography>
                <Typography className="noselect" variant="h4">Total Marks: 15</Typography>
                </Box>
                <Box>
                <Typography className="noselect" variant="h4">Time Remaining : {timeRemaining - time}</Typography>
                </Box>
            </Box>
            
            <Grid container spacing={3} sx={{pl:5, pr:5}}>
                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ pt: 5, pb: 2}}>
                        <Typography className="noselect" variant="h4">Today Test</Typography>
                    </Box>
                    {arr.map(() => (
                        <SingleCheck disabled={false}/>
                    ))}
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ pt: 5, pb: 2}}>
                        <Typography className="noselect" variant="h4">Today Test</Typography>
                    </Box>
                    {arr.map(() => (
                        < AppTasks disabled={false}/>
                    ))}
                </Grid>
        </Grid>
        
        <Box sx={{mt:10,display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Button variant="contained" size="large"> Submit test </Button>
        </Box>

        </Container>
    </Page>
  );
}
