import React from 'react';
import { Box, Grid, Container, Typography, Stack, Divider, Button } from '@mui/material';
import Page from '../../components/Page';
import { UpcomingTest,TestSubmiited,TodayTest,AppNewsUpdate ,UpcomingTestTable, SubmittedTestTable  } from '../../components/teacher';
import { useHistory } from 'react-router-dom';
import studentMain from '../../_mocks_/teacherMain';
import Navbar from '../../components/student/navbar/Navbar';
import faker from 'faker';


export default function DashboardApp() {
    const history = useHistory();
    const [todayTest] =  React.useState(studentMain.ongoingTest);
    const [completedTest] =  React.useState(studentMain.completedTest);
    const arr = Array.from(Array(5).keys());

    return (
    <Page title="Examify | Home">
        <Navbar isHome={false}/>
        <Container maxWidth="xl">
            <Box sx={{ pt: 15, pb: 5}}>
                <Typography variant="h4">Welcome to Examify</Typography>
            </Box>

            <Grid container spacing={3}>

                <Grid item xs={12} sm={4} md={4}>
                    <TodayTest total={2}/>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                    <UpcomingTest total={10}/>
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                    <TestSubmiited total={2}/>
                </Grid>

                <Box sx={{mx:5,mt:5}}>
                    <Button variant="contained" size="large" onClick = {() => history.push('/AddTest')}>Create Test</Button>
                </Box>

                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ pt: 5, pb: 2}}>
                        <Typography variant="h4">Ongoing Test</Typography>
                    </Box>
                    {todayTest.map((data,index) => (
                        <AppNewsUpdate 
                        data = {data}
                        index = {index}
                        />
                    ))}
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                        <UpcomingTestTable isMain={true}/>
                        <Box sx={{mt:5,display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Button variant="contained" size="large" onClick = {() => history.push('/TeacherUpcomingTest')}>Show More</Button>
                        </Box>
                </Grid>


                <Grid item xs={12} md={12} lg={12}>
                    <SubmittedTestTable isMain={true}/>
                    <Box sx={{mt:5,display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Button sx={{mb: 10}} variant="contained" size="large"  onClick = {() => history.push('/TeacherCompletedTest')}>Show More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    </Page>
    );
}
