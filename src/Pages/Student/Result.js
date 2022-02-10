
import React from 'react';
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import Page from '../../components/Page';
import { AppTasks } from '../../components/student/main';


export default function DashboardApp() {
    const arr = Array.from(Array(10).keys());
    const [title, settitle] = React.useState('Compiler Design CT1');

    return (
    <Page title={`Test | ${title}`}>

        <Container maxWidth="xl" sx={{pb: 15}}>
            <Box sx={{ pt: 15, pb: 5}}>
                <Typography className="noselect" variant="h4">{title}</Typography>
                <Typography className="noselect" variant="h4">Marks Obtained: 15</Typography>
                <Typography className="noselect" variant="h4">Total Marks: 15</Typography>
            </Box>

            <Grid container spacing={3} sx={{pl:5, pr:5}}>
                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ pt: 5, pb: 2}}>
                        <Typography className="noselect" variant="h4">Today Test</Typography>
                    </Box>
                    {arr.map(() => (
                        < AppTasks disabled={true} correct={true}/>
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
